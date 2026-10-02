# On MQTT message

Register code to run when a message arrives on the specified MQTT topic.

```sig
UNBdevBoardWiFi.onMessage("lab/value", UNBdevBoardWiFi.DataType.Number, function (value) {})
```

## Parameters

* **topic**: Nonempty topic text without line breaks. Use the exact received topic; the local dispatcher compares topic strings exactly. The subscription packet requires topic UTF-8 bytes + 5 to be less than 127.
* **type**: Choose Number to parse the payload with parseFloat, or Text to keep it as text.
* **handler**: Code receiving the message value.

## Usage notes

Registers the handler and shared UART event dispatcher, then attempts a QoS 0 subscription. Registration returns no success flag: read last error for immediate subscription failure. A later successful MQTT connection resubscribes registered topics. Numeric text that cannot be parsed can produce NaN.

## Example

Wi-Fi/MQTT behavior remains pending physical validation against the installed ESP32 AT firmware. Use only an approved lab network and broker; never share real credentials in saved examples.

```blocks
UNBdevBoardWiFi.onMessage("lab/value", UNBdevBoardWiFi.DataType.Number, function (value) {
    basic.showNumber(value)
})
if (UNBdevBoardWiFi.connectWiFi("LAB_SSID", "LAB_PASSWORD")) {
    UNBdevBoardWiFi.connectMQTT("broker.example")
}
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
