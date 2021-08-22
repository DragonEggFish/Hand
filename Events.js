goog.provide('Blockly.Blocks.event');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['event_whenflagclicked'] = {
  /**
   * Block for when flag clicked.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenflagclicked",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_whenflagclicked.svg",
          "width": 40,
          "height": 40,
          "alt": "When green flag clicked",
          "flip_rtl": true
        }
      ],
      "inputsInline": true,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};

Blockly.Blocks['dropdown_whenbroadcast'] = {
  /**
   * Block for when broadcast dropdown (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu(
            [
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_blue.svg',
                value: 'blue', width: 48, height: 48, alt: 'Blue'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_green.svg',
                value: 'green', width: 48, height: 48, alt: 'Green'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_coral.svg',
                value: 'coral', width: 48, height: 48, alt: 'Coral'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_magenta.svg',
                value: 'magenta', width: 48, height: 48, alt: 'Magenta'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_orange.svg',
                value: 'orange', width: 48, height: 48, alt: 'Orange'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_when-broadcast-received_purple.svg',
                value: 'purple', width: 48, height: 48, alt: 'Purple'}
            ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.event.primary,
        Blockly.Colours.event.secondary,
        Blockly.Colours.event.tertiary
    );
  }
};

Blockly.Blocks['event_whenbroadcastreceived'] = {
  /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenbroadcastreceived",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_when-broadcast-received_blue.svg",
          "width": 40,
          "height": 40,
          "alt": "Broadcast received"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};

Blockly.Blocks['dropdown_broadcast'] = {
  /**
   * Block for broadcast dropdown (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu(
            [
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_broadcast_blue.svg',
                value: 'blue', width: 48, height: 48, alt: 'Blue'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_broadcast_green.svg',
                value: 'green', width: 48, height: 48, alt: 'Green'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_broadcast_coral.svg',
                value: 'coral', width: 48, height: 48, alt: 'Coral'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_broadcast_magenta.svg',
                value: 'magenta', width: 48, height: 48, alt: 'Magenta'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_broadcast_orange.svg',
                value: 'orange', width: 48, height: 48, alt: 'Orange'},
              {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/event_broadcast_purple.svg',
                value: 'purple', width: 48, height: 48, alt: 'Purple'}
            ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.event.primary,
        Blockly.Colours.event.secondary,
        Blockly.Colours.event.tertiary
    );
  }
};

Blockly.Blocks['event_broadcast'] = {
  /**
   * Block to send a broadcast.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_broadcast",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_broadcast_blue.svg",
          "width": 40,
          "height": 40,
          "alt": "Broadcast"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};
