# Connect to MQTT

Connect to an MQTT 3.1.1 broker over unencrypted TCP port 1883.

```sig
UNBdevBoardWiFi.connectMQTT("broker.example")
```

## Parameters

* **server**: Broker host name or address, without line breaks or quotes. Use the broker supplied for your approved lab.

## Returns

A boolean: true on success; false on rejection, invalid input, a malformed response, or timeout as applicable. Read Wi-Fi last error for the reported reason.

## Usage notes

Requires connected Wi-Fi. Uses an anonymous clean session and a device-serial client ID; no TLS or MQTT credentials are supported. Marks the session connected only after a successful CONNACK and resubscribes registered topics. Individual command/acknowledgement waits are up to 30 seconds.

## Example

Wi-Fi/MQTT behavior remains pending physical validation against the installed ESP32 AT firmware. Use only an approved lab network and broker; never share real credentials in saved examples.

```blocks
if (UNBdevBoardWiFi.connectWiFi("LAB_SSID", "LAB_PASSWORD")) {
    if (UNBdevBoardWiFi.connectMQTT("broker.example")) {
        basic.showIcon(IconNames.Yes)
    }
}
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
