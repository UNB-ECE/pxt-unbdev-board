# Restart Wi-Fi

Restart the ESP32 AT firmware without factory-restoring it.

```sig
UNBdevBoardWiFi.restart()
```

## Parameters

This block has no parameters.

## Returns

A boolean: true on success; false on rejection, invalid input, a malformed response, or timeout as applicable. Read Wi-Fi last error for the reported reason.

## Usage notes

Clears the MQTT-connected state, sends AT+RST, waits up to 10 seconds for ready, then pauses 500 ms. Reconnect Wi-Fi and MQTT explicitly afterwards.

## Example

Wi-Fi/MQTT behavior remains pending physical validation against the installed ESP32 AT firmware. Use only an approved lab network and broker; never share real credentials in saved examples.

```blocks
if (UNBdevBoardWiFi.restart()) {
    basic.showString("READY")
}
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
