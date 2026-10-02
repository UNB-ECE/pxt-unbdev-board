# Wi-Fi last error

Read the most recently reported Wi-Fi/MQTT error code.

```sig
UNBdevBoardWiFi.lastError()
```

## Parameters

This block has no parameters.

## Returns

An ErrorCode value: None (0), Timeout (1), Rejected (2), NotConnected (3), InvalidArgument (4), MalformedResponse (5), or PacketTooLarge (6).

## Usage notes

This reads a stored code without sending a hardware command. It does not clear the error; subsequent commands or incoming messages may change it.

## Example

Wi-Fi/MQTT behavior remains pending physical validation against the installed ESP32 AT firmware. Use only an approved lab network and broker; never share real credentials in saved examples.

```blocks
if (!UNBdevBoardWiFi.isConnected()) {
    basic.showNumber(UNBdevBoardWiFi.lastError())
}
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
