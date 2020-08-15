// Emojis
const emojiName = {
    happyFace: '😀',
    partyingFace: '🥳',
    faceWithTearsOfJoy: '😂',
    smilingFaceWithHearts: '🥰',
    nerdFace: '🤓',
    astonishedFace: '😲',
    unamusedFace: '😒',
    sleepingFace: '😴',
    heart: '🧡',
    thumbsUp: '👍',
    thumbsDown: '👎',
    fire: '🔥',
    smilingPoop: '💩'
};

// Channel name
const urlString = window.location.search;
console.log("URL Params: " + urlString);
const urlParams = new URLSearchParams(urlString);
const channel = urlParams.get('c')
const defaultChannel = '3feWGFFm';
const channelName = channel ? channel : defaultChannel;

// MQTT over WebSockets
const mqttServer = "test.mosquitto.org";
const mqttPort   = 8081;
// MQTT topic
const mqttTopic = 'emojireaction/' + channelName + '/reactions';
const mqttClientId = "emojireaction" + channelName + Math.floor(Math.random() * 10000) + 10;  //clientId

// Create a new Client object with your broker's hostname, port and your own clientId
// http://www.eclipse.org/paho/files/jsdoc/Paho.MQTT.Client.html
var client = new Paho.Client(
    mqttServer,
    Number(mqttPort),
    mqttClientId
);
console.log("MQTT server: " + mqttServer + ':' + mqttPort);
console.log("Topic: " + mqttTopic);
console.log("Client ID: " + mqttClientId);
