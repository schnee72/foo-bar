import React from 'react';

const Configurator = () =>
  <div>
    <h1>Configurator</h1>
    <h2>Sites</h2>
    <select>
      <option>Site 0</option>
    </select>
    <button>New Site</button>
    <p>
      <label>Title</label>
      <input />
    </p>
    <p>something</p>
    <p><button>Add Page</button></p>
    <select>
      <option>Header</option>
      <option>Content</option>
      <option>Text</option>
      <option>Image</option>
      <option>Input</option>
      <option>Link</option>
      <option>Nav</option>
      <option>Footer</option>
    </select>
    <button>+</button>
  </div>;

export default Configurator;
