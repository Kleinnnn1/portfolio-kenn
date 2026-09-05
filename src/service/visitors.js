import { GoogleAuth } from "google-auth-library";

const PROPERTY_ID = process.env.GA_PROPERTY_ID;

export default async function handler(req, res) {
  try {
    const auth = new GoogleAuth({
      credentials: {
        client_email: process.env.GA_CLIENT_EMAIL,
        private_key: process.env.GA_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const client = await auth.getClient();
    const token = await client.getAccessToken();

    const response = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dateRanges: [{ startDate: "2024-01-01", endDate: "today" }],
          dimensions: [{ name: "countryId" }], // ISO alpha-2 code, e.g. "PH"
          metrics: [{ name: "totalUsers" }],
          orderBys: [{ metric: { metricName: "totalUsers" }, desc: true }],
          limit: 100,
        }),
      }
    );

    const data = await response.json();

    const countries = (data.rows || [])
      .map((row) => ({
        code: row.dimensionValues[0].value,
        users: Number(row.metricValues[0].value),
      }))
      .filter((c) => c.code && c.code !== "(not set)");

    const totalUsers = countries.reduce((sum, c) => sum + c.users, 0);

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json({ totalUsers, countryCount: countries.length, countries });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
}