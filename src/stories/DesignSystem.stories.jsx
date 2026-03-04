import React from 'react';
import { colors, designSystemData } from '../tokens';
import './DesignSystem.css';

const meta = {
  title: 'Documentation/Design System',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete Blink Design System documentation with all tokens, colors, and component specifications.',
      },
    },
  },
};

export default meta;

export const Overview = {
  render: () => (
    <div className="ds-container">
      <h1>Blink Design System</h1>
      <p className="ds-subtitle">{designSystemData.metadata.description}</p>
      <p className="ds-version">Version: {designSystemData.metadata.version}</p>

      <div className="ds-grid">
        <section className="ds-section">
          <h2>About</h2>
          <p>A comprehensive, framework-agnostic design system for the Blink dispatch management platform.</p>
          <ul>
            <li>✓ Framework Agnostic</li>
            <li>✓ Storybook Optimized</li>
            <li>✓ Complete Token System</li>
            <li>✓ Production Ready</li>
          </ul>
        </section>

        <section className="ds-section">
          <h2>Using the Design System</h2>
          <p>The design system provides:</p>
          <ul>
            <li><strong>Design Tokens</strong> - Colors, spacing, typography</li>
            <li><strong>Components</strong> - Reusable UI elements</li>
            <li><strong>Guidelines</strong> - Best practices and patterns</li>
            <li><strong>CSS Variables</strong> - For dynamic theming</li>
          </ul>
        </section>
      </div>
    </div>
  ),
};

export const Colors = {
  render: () => (
    <div className="ds-container">
      <h1>Color Palette</h1>
      <p className="ds-subtitle">Complete color system with semantic naming</p>

      <div className="colors-grid">
        {Object.entries(colors).map(([categoryName, paletteData]) => (
          <div key={categoryName} className="color-category">
            <h3>{categoryName}</h3>
            <div className="color-swatches">
              {paletteData.colors.map((color) => (
                <div key={color.variable} className="color-swatch">
                  <div
                    className="color-box"
                    style={{ backgroundColor: color.hex }}
                    title={color.hex}
                  />
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-hex">{color.hex}</div>
                    <div className="color-var">{color.variable}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Tokens = {
  render: () => (
    <div className="ds-container">
      <h1>Design Tokens</h1>
      <p className="ds-subtitle">Foundation for consistent design</p>

      <div className="tokens-section">
        <h2>Color Tokens</h2>
        <div className="token-list">
          {Object.entries(colors).flatMap(([, paletteData]) =>
            paletteData.colors.map((color) => (
              <div key={color.variable} className="token-item">
                <code className="token-var">{color.variable}</code>
                <code className="token-value">{color.hex}</code>
              </div>
            ))
          )}
        </div>
      </div>

      {designSystemData.tokens.spacing && (
        <div className="tokens-section">
          <h2>Spacing Tokens</h2>
          <div className="token-list">
            {Object.entries(designSystemData.tokens.spacing).map(([key, token]) => (
              <div key={key} className="token-item">
                <code className="token-var">{token.variable}</code>
                <code className="token-value">{token.value}</code>
              </div>
            ))}
          </div>
        </div>
      )}

      {designSystemData.tokens.typography && (
        <div className="tokens-section">
          <h2>Typography Tokens</h2>
          <div className="token-list">
            {Object.entries(designSystemData.tokens.typography).map(([key, token]) => (
              <div key={key} className="token-item">
                <code className="token-var">{token.variable}</code>
                <code className="token-value">{token.value}</code>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  ),
};

export const Components = {
  render: () => (
    <div className="ds-container">
      <h1>Component Library</h1>
      <p className="ds-subtitle">Functional and Business Components</p>

      {designSystemData.components.functional && (
        <div className="components-section">
          <h2>Functional Components</h2>
          <div className="component-grid">
            {designSystemData.components.functional.map((category, idx) => (
              <div key={idx} className="component-category">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <ul>
                  {category.components.map((comp) => (
                    <li key={comp.id}>
                      <strong>{comp.name}</strong> - {comp.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {designSystemData.components.business && (
        <div className="components-section">
          <h2>Business Components</h2>
          <div className="component-grid">
            {designSystemData.components.business.map((category, idx) => (
              <div key={idx} className="component-category">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <ul>
                  {category.components.map((comp) => (
                    <li key={comp.id}>
                      <strong>{comp.name}</strong> - {comp.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  ),
};

export const UsageGuide = {
  render: () => (
    <div className="ds-container">
      <h1>Usage Guide</h1>
      <p className="ds-subtitle">{designSystemData.usageGuide.description}</p>

      <div className="guide-section">
        <h2>Design Tokens</h2>
        <p>{designSystemData.usageGuide.tokens.description}</p>

        <h3>Usage Examples</h3>
        <div className="code-example">
          <h4>CSS</h4>
          <pre><code>{`padding: var(--spacing-2); /* 8px */
color: var(--primary-500);`}</code></pre>
        </div>

        <div className="code-example">
          <h4>React</h4>
          <pre><code>{`<div style={{ padding: 'var(--spacing-2)' }}>
  Content
</div>`}</code></pre>
        </div>

        <div className="code-example">
          <h4>Angular</h4>
          <pre><code>{`<div [style.padding]="'var(--spacing-2)'">
  Content
</div>`}</code></pre>
        </div>

        <div className="code-example">
          <h4>Vue</h4>
          <pre><code>{`<div :style="{ padding: 'var(--spacing-2)' }">
  Content
</div>`}</code></pre>
        </div>
      </div>

      <div className="guide-section">
        <h2>Components</h2>
        <p>{designSystemData.usageGuide.components.description}</p>
        <h3>Style Tokens</h3>
        <p>{designSystemData.usageGuide.components.styleTokens.description}</p>
      </div>
    </div>
  ),
};
