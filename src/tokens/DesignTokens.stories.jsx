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

export const BorderRadius = {
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h1>Border Radius</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '24px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '12px' }}>Token</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Radius</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Preview</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>sm</td>
            <td style={{ padding: '12px' }}>3px</td>
            <td style={{ padding: '12px' }}><div style={{ width: '48px', height: '48px', backgroundColor: '#77c2f7', borderRadius: '3px' }}></div></td>
            <td style={{ padding: '12px' }}>Input fields, cards (subtle)</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>md</td>
            <td style={{ padding: '12px' }}>4px</td>
            <td style={{ padding: '12px' }}><div style={{ width: '48px', height: '48px', backgroundColor: '#77c2f7', borderRadius: '4px' }}></div></td>
            <td style={{ padding: '12px' }}>Default for most components</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>lg</td>
            <td style={{ padding: '12px' }}>8px</td>
            <td style={{ padding: '12px' }}><div style={{ width: '48px', height: '48px', backgroundColor: '#77c2f7', borderRadius: '8px' }}></div></td>
            <td style={{ padding: '12px' }}>Larger cards, panels</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}>full</td>
            <td style={{ padding: '12px' }}>100px</td>
            <td style={{ padding: '12px' }}><div style={{ width: '96px', height: '36px', backgroundColor: '#FAA61A', borderRadius: '100px' }}></div></td>
            <td style={{ padding: '12px' }}>Buttons, badges (pill-shaped)</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const Shadows = {
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h1>Shadows & Elevation</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', marginTop: '32px' }}>
        <div>
          <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '16px' }}>
            Elevation 1
          </div>
          <h4 style={{ margin: '0 0 4px 0' }}>Elevation 1 — Cards, Dropdowns</h4>
          <code style={{ fontSize: '12px', backgroundColor: '#f5f5f5', padding: '4px 8px', borderRadius: '3px', display: 'block' }}>
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          </code>
        </div>

        <div>
          <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '16px' }}>
            Elevation 2
          </div>
          <h4 style={{ margin: '0 0 4px 0' }}>Elevation 2 — Modals, Dialogs</h4>
          <code style={{ fontSize: '12px', backgroundColor: '#f5f5f5', padding: '4px 8px', borderRadius: '3px', display: 'block' }}>
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          </code>
        </div>

        <div>
          <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', marginBottom: '16px' }}>
            Elevation 3
          </div>
          <h4 style={{ margin: '0 0 4px 0' }}>Elevation 3 — Floating Actions</h4>
          <code style={{ fontSize: '12px', backgroundColor: '#f5f5f5', padding: '4px 8px', borderRadius: '3px', display: 'block' }}>
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          </code>
        </div>
      </div>
    </div>
  ),
};

export const Transitions = {
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h1>Transitions</h1>
      <p>Default timing for smooth interactions:</p>
      <code style={{ display: 'block', backgroundColor: '#f5f5f5', padding: '12px 16px', borderRadius: '4px', marginBottom: '32px' }}>
        transition: all 200ms ease;
      </code>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '12px' }}>Speed</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Duration</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Fast</td>
            <td style={{ padding: '12px' }}>100ms</td>
            <td style={{ padding: '12px' }}>Micro-interactions (hover states)</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>Normal</td>
            <td style={{ padding: '12px' }}>200ms</td>
            <td style={{ padding: '12px' }}>Default interactions</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}>Slow</td>
            <td style={{ padding: '12px' }}>300ms</td>
            <td style={{ padding: '12px' }}>Complex animations</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const UsageGuidelines = {
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h1>Usage Guidelines</h1>

      <h2 style={{ marginTop: '40px' }}>Colors</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '12px' }}>Color</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Use for</th>
            <th style={{ textAlign: 'left', padding: '12px' }}>Do NOT use for</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#77c2f7', borderRadius: '2px', marginRight: '8px', verticalAlign: 'middle' }}></span>Primary Blue</td>
            <td style={{ padding: '12px' }}>Focus states, checked/selected, links, secondary CTAs, badges</td>
            <td style={{ padding: '12px' }}>Page backgrounds, large text areas, primary action buttons</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#FAA61A', borderRadius: '2px', marginRight: '8px', verticalAlign: 'middle' }}></span>Primary Orange</td>
            <td style={{ padding: '12px' }}>Primary action buttons (Book, Register, Create), critical CTAs</td>
            <td style={{ padding: '12px' }}>Links (use Blue), error states (use Red), decorative elements</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#1A2332', borderRadius: '2px', marginRight: '8px', verticalAlign: 'middle' }}></span>Dark Navy</td>
            <td style={{ padding: '12px' }}>Header/navigation, text on light backgrounds</td>
            <td style={{ padding: '12px' }}>Light backgrounds, interactive elements</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#ED5958', borderRadius: '2px', marginRight: '8px', verticalAlign: 'middle' }}></span>Error Red</td>
            <td style={{ padding: '12px' }}>Error messages, invalid fields, destructive actions, alerts</td>
            <td style={{ padding: '12px' }}>Success states (use Green), information (use Blue)</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#9ACF30', borderRadius: '2px', marginRight: '8px', verticalAlign: 'middle' }}></span>Success Green</td>
            <td style={{ padding: '12px' }}>Success messages, completed states, positive confirmations</td>
            <td style={{ padding: '12px' }}>Errors (use Red), links (use Blue)</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ marginTop: '40px' }}>Typography</h2>
      <ul>
        <li>Always use Lato as primary font</li>
        <li>Maintain 1.5× line-height for body text</li>
        <li>Use font-weight 600+ only for emphasis</li>
      </ul>

      <h2 style={{ marginTop: '40px' }}>Spacing</h2>
      <ul>
        <li>Always snap to 4px grid</li>
        <li>Maintain consistent gaps between sections</li>
        <li>Use <code>md</code> (16px) as default component gap</li>
      </ul>

      <h2 style={{ marginTop: '40px' }}>Accessibility</h2>
      <ul>
        <li>Maintain minimum 4.5:1 contrast ratio for text</li>
        <li>Error Red and Orange meet WCAG AA standards</li>
        <li>All colors tested for colorblind accessibility</li>
      </ul>
    </div>
  ),
};
