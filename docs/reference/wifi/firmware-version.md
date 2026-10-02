# Wi-Fi firmware version

Read the ESP32 AT firmware identification using AT+GMR.

```sig
UNBdevBoardWiFi.firmwareVersion()
```

## Parameters

This block has no parameters.

## Returns

A string containing the identification response with command echo and trailing OK removed, or an empty string if the query fails.

## Usage notes

This read-only query waits up to 3 seconds. It reports ESP32 firmware, not the separate board-controller firmware.

## Example

Wi-Fi/MQTT behavior remains pending physical validation against the installed ESP32 AT firmware. Use only an approved lab network and broker; never share real credentials in saved examples.

```blocks
let version = UNBdevBoardWiFi.firmwareVersion()
if (version.length > 0) {
    basic.showString(version)
}
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
