const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: "ipc"
});
const logger = require('./Utils/logger');
const config = require("./Utils/config");

rpc.on('ready', () => {
    rpc.setActivity({
        details: config.Details,
        state: config.State,
        largeImageKey: config.LargeImage,
        largeImageText: config.LargeImageTooltip,
        smallImageKey: config.SmallImage,
        smallImageText: config.SmallImageTooltip,
        startTimestamp: new Date(),
    })

    logger.log(" Discord Rich Presence is READY ! ","ready")
})
try {
rpc.login({
    clientId: config.ClientID
})    
} catch(e) {
    logger.log(e, "error")
}