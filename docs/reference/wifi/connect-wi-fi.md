# Connect to Wi-Fi

Ask the integrated ESP32 to join a Wi-Fi access point.

```sig
UNBdevBoardWiFi.connectWiFi("LAB_SSID", "LAB_PASSWORD")
```

## Parameters

* **ssid**: Access-point name; nonempty text without line breaks, quotes, or backslashes.
* **password**: Wi-Fi password with the same restrictions; an empty password is not accepted.

## Returns

A boolean: true on success; false on rejection, invalid input, a malformed response, or timeout as applicable. Read Wi-Fi last error for the reported reason.

## Usage notes

Resets the interface control pin, enables station mode and multiple connections, joins the access point, then queries status. Each AT-command wait is bounded by 30 seconds; the full sequence can take longer. Credentials remain in the compiled project: use placeholders in shared examples.

## Example

Wi-Fi/MQTT behavior remains pending physical validation against the installed ESP32 AT firmware. Use only an approved lab network and broker; never share real credentials in saved examples.

```blocks
if (UNBdevBoardWiFi.connectWiFi("LAB_SSID", "LAB_PASSWORD")) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
