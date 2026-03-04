const meta = {
  title: 'Foundation/Design Tokens',
};

export default meta;

const ColorBox = ({ color, name, hex, usage }) => (
  <div style={{ marginBottom: '24px' }}>
    <div style={{
      width: '100%',
      height: '120px',
      backgroundColor: color,
      borderRadius: '8px',
      marginBottom: '12px',
      border: '1px solid #eee'
    }}></div>
    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600' }}>{name}</h4>
    <code style={{ fontSize: '12px', fontFamily: 'monospace', backgroundColor: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>{hex}</code>
    <p style={{ fontSize: '12px', color: '#666', margin: '8px 0 0 0' }}>{usage}</p>
  </div>
);

export const Colors = {
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h1>Color Palette</h1>
      
      <h2 style={{ marginTop: '40px', marginBottom: '24px' }}>Primary Colors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
        <ColorBox 
          color="#77c2f7" 
          name="Primary Blue" 
          hex="#77c2f7"
          usage="Links, form focus, checked states, badges"
        />
        <ColorBox 
          color="#FAA61A" 
          name="Primary Orange" 
          hex="#FAA61A"
          usage="Primary buttons, CTAs"
        />
        <ColorBox 
          color="#1A2332" 
          name="Dark Navy" 
          hex="#1A2332"
          usage="Header, navigation"
        />
        <ColorBox 
          color="#9ACF30" 
          name="Success Green" 
          hex="#9ACF30"
          usage="Success states, confirmations"
        />
        <ColorBox 
          color="#ED5958" 
          name="Error Red" 
          hex="#ED5958"
          usage="Errors, validation, alerts"
        />
      </div>

      <h2 style={{ marginTop: '40px', marginBottom: '24px' }}>Neutral Colors</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '12px' }}>Color</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Hex / RGBA</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>White</td>
            <td style={{ padding: '12px', fontFamily: 'monospace' }}>#FFFFFF</td>
            <td style={{ padding: '12px' }}>Form cards, input fields</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Light Gray</td>
            <td style={{ padding: '12px', fontFamily: 'monospace' }}>#F5F5F5</td>
            <td style={{ padding: '12px' }}>Page backgrounds</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Text Primary</td>
            <td style={{ padding: '12px', fontFamily: 'monospace' }}>rgba(0,0,0,0.87)</td>
            <td style={{ padding: '12px' }}>Main text</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Text Secondary</td>
            <td style={{ padding: '12px', fontFamily: 'monospace' }}>rgba(0,0,0,0.54)</td>
            <td style={{ padding: '12px' }}>Secondary text, labels</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Text Disabled</td>
            <td style={{ padding: '12px', fontFamily: 'monospace' }}>rgba(0,0,0,0.38)</td>
            <td style={{ padding: '12px' }}>Disabled states</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}>Dividers</td>
            <td style={{ padding: '12px', fontFamily: 'monospace' }}>rgba(0,0,0,0.12)</td>
            <td style={{ padding: '12px' }}>Borders, dividers</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const Typography = {
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h1>Typography System</h1>
      
      <h2 style={{ marginTop: '40px', marginBottom: '24px' }}>Font Family</h2>
      <p><strong>Primary:</strong> Lato (sans-serif)</p>
      <p><strong>Fallback:</strong> Roboto</p>
      <p style={{ fontSize: '12px', color: '#666' }}>Loaded from Google Fonts with swap strategy</p>

      <h2 style={{ marginTop: '40px', marginBottom: '24px' }}>Font Scale</h2>
      
      <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <div style={{ fontSize: '32px', fontWeight: '300', marginBottom: '8px' }}>32px Light</div>
        <p style={{ fontSize: '12px', color: '#666' }}>Large headings</p>
      </div>

      <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <div style={{ fontSize: '22px', fontWeight: '400', marginBottom: '8px' }}>22px Regular</div>
        <p style={{ fontSize: '12px', color: '#666' }}>Page titles</p>
      </div>

      <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <div style={{ fontSize: '16px', fontWeight: '400', marginBottom: '8px' }}>16px Regular (Body)</div>
        <p style={{ fontSize: '12px', color: '#666' }}>Main text, buttons, form fields</p>
      </div>

      <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <div style={{ fontSize: '14px', fontWeight: '400', marginBottom: '8px' }}>14px Regular (Form Label)</div>
        <p style={{ fontSize: '12px', color: '#666' }}>Form labels, secondary text</p>
      </div>

      <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <div style={{ fontSize: '12px', fontWeight: '400', marginBottom: '8px' }}>12px Regular (Caption)</div>
        <p style={{ fontSize: '12px', color: '#666' }}>Helper text, captions</p>
      </div>

      <h2 style={{ marginTop: '40px', marginBottom: '24px' }}>Font Weights</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '12px' }}>Weight</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Value</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Light</td>
            <td style={{ padding: '12px' }}>300</td>
            <td style={{ padding: '12px' }}>Large headings</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Regular</td>
            <td style={{ padding: '12px' }}>400</td>
            <td style={{ padding: '12px' }}>Body, default</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Medium</td>
            <td style={{ padding: '12px' }}>500</td>
            <td style={{ padding: '12px' }}>Labels, emphasis</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Semi-bold</td>
            <td style={{ padding: '12px' }}>600</td>
            <td style={{ padding: '12px' }}>Buttons, strong emphasis</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}>Bold</td>
            <td style={{ padding: '12px' }}>700</td>
            <td style={{ padding: '12px' }}>Rare, very strong emphasis</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const Spacing = {
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h1>Spacing & Responsive</h1>
      
      <h2 style={{ marginTop: '40px', marginBottom: '24px' }}>Spacing Scale (4px Grid)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '12px' }}>Token</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Size</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Visual</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>xs</td>
            <td style={{ padding: '12px' }}>4px</td>
            <td style={{ padding: '12px' }}><div style={{ width: '4px', height: '20px', backgroundColor: '#77c2f7' }}></div></td>
            <td style={{ padding: '12px' }}>Minimal gaps</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>sm</td>
            <td style={{ padding: '12px' }}>8px</td>
            <td style={{ padding: '12px' }}><div style={{ width: '8px', height: '20px', backgroundColor: '#77c2f7' }}></div></td>
            <td style={{ padding: '12px' }}>Component spacing</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>md</td>
            <td style={{ padding: '12px' }}>16px</td>
            <td style={{ padding: '12px' }}><div style={{ width: '16px', height: '20px', backgroundColor: '#77c2f7' }}></div></td>
            <td style={{ padding: '12px' }}>Default gaps</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>lg</td>
            <td style={{ padding: '12px' }}>24px</td>
            <td style={{ padding: '12px' }}><div style={{ width: '24px', height: '20px', backgroundColor: '#77c2f7' }}></div></td>
            <td style={{ padding: '12px' }}>Section spacing</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}>xl</td>
            <td style={{ padding: '12px' }}>32px</td>
            <td style={{ padding: '12px' }}><div style={{ width: '32px', height: '20px', backgroundColor: '#77c2f7' }}></div></td>
            <td style={{ padding: '12px' }}>Major sections</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ marginTop: '40px', marginBottom: '24px' }}>Responsive Breakpoints</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '12px' }}>Breakpoint</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Size</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Device</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>xs</td>
            <td style={{ padding: '12px' }}>0px</td>
            <td style={{ padding: '12px' }}>Mobile (default)</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>sm</td>
            <td style={{ padding: '12px' }}>576px</td>
            <td style={{ padding: '12px' }}>Small tablet</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>md</td>
            <td style={{ padding: '12px' }}>768px</td>
            <td style={{ padding: '12px' }}>Tablet</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>lg</td>
            <td style={{ padding: '12px' }}>992px</td>
            <td style={{ padding: '12px' }}>Desktop</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>xl</td>
            <td style={{ padding: '12px' }}>1200px</td>
            <td style={{ padding: '12px' }}>Large desktop</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}>xxl</td>
            <td style={{ padding: '12px' }}>1400px</td>
            <td style={{ padding: '12px' }}>Extra large</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};
