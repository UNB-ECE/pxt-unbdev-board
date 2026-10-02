# Publish MQTT message

Send text or a number to an MQTT topic in the connected broker session.

```sig
UNBdevBoardWiFi.publish("lab/value", 42)
```

## Parameters

* **topic**: Nonempty topic text without line breaks.
* **data**: Text or a number to send; numbers are converted to text. Other data types are rejected.

## Returns

A boolean: true when the ESP32 reports SEND OK; false on failure. QoS 0 has no broker acknowledgement, so true does not prove a subscriber received the message.

## Usage notes

Requires an MQTT connection. Topic and payload are UTF-8 encoded; 2 + topic bytes + payload bytes must be less than 127. No retain flag or QoS 1/2 is supported. Sending can use two waits of up to 30 seconds. A send failure clears the connected state.

## Example

Wi-Fi/MQTT behavior remains pending physical validation against the installed ESP32 AT firmware. Use only an approved lab network and broker; never share real credentials in saved examples.

```blocks
input.onButtonPressed(Button.A, function () {
    if (UNBdevBoardWiFi.publish("lab/value", 42)) {
        basic.showIcon(IconNames.Yes)
    }
})
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
