# Set Click UART baud

Request the UART communication rate for a Click socket.

```sig
UNBdevClick.uartSetBaud(115200, UNBdevClick.Socket.A)
```

## Parameters

* **baud**: Communication rate in bits per second, such as 115200. Match the attached module and use a rate validated for the controller.
* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Usage notes

The API sends a 32-bit rate value and does not check which rates the hardware supports. This affects the selected Click UART, not micro:bit USB serial.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
UNBdevClick.uartSetBaud(115200, UNBdevClick.Socket.A)
UNBdevClick.uartSendString("HELLO", UNBdevClick.Socket.A)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
