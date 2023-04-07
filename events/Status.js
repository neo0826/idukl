const client =require("../index")

client.on("ready", async () => {

  let servercount = await client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
  const servers = await client.guilds.cache.size

const activities = [
    `-help`
  ];
 setInterval(() => {

       const status = activities[Math.floor(Math.random() * activities.length)]
        client.user.setPresence({ activities: [{ name: `${status}` }] });
}, 5000);
});
