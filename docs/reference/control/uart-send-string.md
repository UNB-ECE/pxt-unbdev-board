# Send Click UART string

Send text through a Click socket UART via the board controller.

```sig
UNBdevClick.uartSendString("HELLO", UNBdevClick.Socket.A)
```

## Parameters

* **text**: Text to transmit. The transport adds a terminating zero byte, not an automatic line ending.
* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Usage notes

Set the baud rate to match the attached module. Follow its protocol for line endings, message lengths, and encoding; do not assume the micro:bit USB serial port is used.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
UNBdevClick.uartSetBaud(115200, UNBdevClick.Socket.A)
UNBdevClick.uartSendString("HELLO\r\n", UNBdevClick.Socket.A)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
