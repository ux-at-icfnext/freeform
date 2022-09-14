---
layout: left-rail
categories: [styles]
title: Buttons
type: [sub-nav-item]
permalink: /styles/buttons/
---
#### Contents
* TOC
{:toc}

## Description
A button draws attention to important actions with a large selectable surface.

## Design
<h4 class= "">Default</h4>
<div class="content-flex flex-wrap-space">
  <a href="" class="button primary-button">Default</a>
  <a href="" class="button primary-button hover">Hover</a>
  <a href="" class="button primary-button active">Active</a>
  <a href="" class="button primary-button focus">Focus</a>
  <a href="" class="button disabled" disabled="disabled">Disabled</a>
  <a href="" class="button unstyled-button">Text button</a>
</div>
<h4 class="">Secondary color</h4>
<div class="content-flex flex-wrap-space">
  <a href="" class="button secondary-button">Default</a>
  <a href="" class="button secondary-button hover">Hover</a>
  <a href="" class="button secondary-button active">Active</a>
  <a href="" class="button secondary-button focus">Focus</a>
  <a href="" class="button disabled" disabled="disabled">Disabled</a>
  <a href="" class="button unstyled-button">Text button</a>
</div>

## Specification
- OnClick/OnTap of button activates desired functionality. Functionality in determined by the context of the button (for example in a search experience or as a link item).
- Buttons use states for hover, focus, active
- The unstyled button can be used as a text link that needs to have click-space padding
- Buttons are keyboard accessible
- **Disabled Button** - the disabled button is used to indicate that there is actions on the page that need to happen before the button can be used. The user cannot interact with button. Once the required functionailty has happened on the page, the disabled state should be swtiched with an actionalble button

## Language
Button text should be as short as possible and lead with action words that clearly explain what will happen when the button is selected. (For example, Download, Login, Submit)

## Accessibility
It is important that buttons conform to Section 508 best practices so that they can be used successfully by everyone. 
So, contrast of the button and text colors should meet W3C guidelines and alt text is required for all button text, except for disabled buttons (as disabled elements do not need to be read). Disabled buttons are exempt from the minimum contrast ratio requirements.
Note that these buttons, if used as designed, are 508 compliant.

## Analytics Tracking
In general, all buttons should have tracking. This allows analytics for user actions on the site. 
Developers need to ensure that there is some identifying feature on the button such as a click ID or click class. 
Analytics events are set-up by the HHS analytics team once the web page is deployed.
