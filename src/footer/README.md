## Demo

```html_demo
<mdl-footer size="mega">
  <mdl-footer-section type="middle">
    <mdl-footer-drop-down title="Features">
      <mdl-footer-link-list>
        <a href="#">About</a>
        <a href="#">Terms</a>
        <a href="#">Partners</a>
        <a href="#">Updates</a>
      </mdl-footer-link-list>
    </mdl-footer-drop-down>
    <mdl-footer-drop-down title="Details">
      <mdl-footer-link-list>
        <a href="#">Specs</a>
        <a href="#">Tools</a>
        <a href="#">Resources</a>
      </mdl-footer-link-list>
    </mdl-footer-drop-down>
    <mdl-footer-drop-down title="Technology">
      <mdl-footer-link-list>
        <a href="#">How it works</a>
        <a href="#">Patterns</a>
        <a href="#">Usage</a>
        <a href="#">Products</a>
        <a href="#">Contracts</a>
      </mdl-footer-link-list>
    </mdl-footer-drop-down>
    <mdl-footer-drop-down title="FAQ">
      <mdl-footer-link-list>
        <a href="#">Questions</a>
        <a href="#">Answers</a>
        <a href="#">Contact Us</a>
      </mdl-footer-link-list>
    </mdl-footer-drop-down>
  </mdl-footer-section>
  <mdl-footer-section type="bottom">
    <mdl-logo>Title</mdl-logo>
    <mdl-footer-link-list>
      <a href="#">Help</a>
      <a href="#">Privacy & Terms</a>
    </mdl-footer-link-list>
  </mdl-footer-section>
</mdl-footer>
```

## Configuration options


| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-footer | size | String (mini, mega) | Set the size of the footer | Optional, default "mega" |
| mdl-footer-section | type | String (top, middle, bottom, left, right) | Set the section type  | Optional, default left |
| mdl-footer-drop-down | title | String | Set the "logo" name | Required |
