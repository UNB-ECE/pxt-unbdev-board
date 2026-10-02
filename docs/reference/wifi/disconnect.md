# Disconnect Wi-Fi

Ask the ESP32 to leave its Wi-Fi access point.

```sig
UNBdevBoardWiFi.disconnect()
```

## Parameters

This block has no parameters.

## Returns

A boolean: true on success; false on rejection, invalid input, a malformed response, or timeout as applicable. Read Wi-Fi last error for the reported reason.

## Usage notes

Clears the extension MQTT-connected state and waits up to 30 seconds for the AT+CWQAP response.

## Example

Wi-Fi/MQTT behavior remains pending physical validation against the installed ESP32 AT firmware. Use only an approved lab network and broker; never share real credentials in saved examples.

```blocks
input.onButtonPressed(Button.B, function () {
    if (UNBdevBoardWiFi.disconnect()) {
        basic.showIcon(IconNames.Yes)
    }
})
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
