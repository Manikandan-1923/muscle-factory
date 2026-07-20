require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8"]);

const { MongoClient } = require("mongodb");

console.log("DNS:", dns.getServers());

const client = new MongoClient(process.env.MONGO_URI);

async function test() {
  try {
    await client.connect();
    console.log("✅ Connected Successfully");
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Ping Success");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

test();