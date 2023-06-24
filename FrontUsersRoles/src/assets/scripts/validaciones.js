function avoidWhitespace(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
      return false;
    }
    return true;
  }