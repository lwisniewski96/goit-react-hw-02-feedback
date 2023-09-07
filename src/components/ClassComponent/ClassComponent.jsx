// ZADEKLAROWANIE KOMPONENTU KLASOWEGO
// Komponenty klasowe zawsze muszą coś renderować, dlatego wewnątrz klasy, zawsze uywyamy render

import { Component } from 'react';

class myClassComponent extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <div></div>;
  }
}

export default myClassComponent;
