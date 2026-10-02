# Wi-Fi is connected

Query whether the ESP32 reports a connected Wi-Fi station.

```sig
UNBdevBoardWiFi.isConnected()
```

## Parameters

This block has no parameters.

## Returns

A boolean: true for ESP-AT status 2 or 3; false for other status, malformed response, rejection, or timeout.

## Usage notes

Queries the module instead of only reading a cached flag. It can wait up to 30 seconds. This does not establish that an MQTT broker is connected.

## Example

Wi-Fi/MQTT behavior remains pending physical validation against the installed ESP32 AT firmware. Use only an approved lab network and broker; never share real credentials in saved examples.

```blocks
if (UNBdevBoardWiFi.isConnected()) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
