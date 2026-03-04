import React from 'react';

const meta = {
  title: 'Foundation/Brand Guidelines',
};

export default meta;

const Table = ({ headers, rows }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
    <thead>
      <tr style={{ borderBottom: '2px solid #ddd' }}>
        {headers.map((h) => (
          <th key={h} style={{ textAlign: 'left', padding: '12px', fontWeight: '600' }}>
            {h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
          {row.map((cell, j) => (
            <td key={j} style={{ padding: '12px' }}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export const Overview = {
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h1>Brand Guidelines</h1>
      
      <h2 style={{ marginTop: '40px' }}>Brand Overview</h2>
      <p>
        <strong>Blink</strong> is a modern logistics and dispatch platform for carriers and shippers.
      </p>
      <p>Our brand is:</p>
      <ul>
        <li><strong>Professional</strong> — We handle serious logistics</li>
        <li><strong>Approachable</strong> — We make complex things simple</li>
        <li><strong>Real</strong> — We show actual work, not software screens</li>
        <li><strong>Empowering</strong> — We solve real problems</li>
      </ul>

      <h2 style={{ marginTop: '40px' }}>Tone & Voice</h2>
      
      <h3>Key Principles</h3>
      <ul>
        <li>✓ Direct and action-oriented verbs (Book, Create, Export)</li>
        <li>✓ Clear and concise (1-3 words for buttons)</li>
        <li>✓ Active voice ("Your driver arrives in 3 min" not "estimated time of arrival")</li>
        <li>✓ Conversational, not robotic</li>
        <li>✓ Supportive and helpful</li>
      </ul>

      <h3>Examples</h3>
      <Table
        headers={['Situation', 'Good', 'Avoid']}
        rows={[
          ['Button', 'Book Now', 'The booking system allows...'],
          ['Status', 'Your driver is 3 min away', 'Estimated time of arrival: 3 minutes'],
          ['Error', 'Phone must be 10+ digits', 'Invalid input'],
          ['Success', 'Booking confirmed! 🎉', 'Operation successful'],
          ['Help', 'Need help? Here\'s how...', 'See documentation'],
        ]}
      />

      <h2 style={{ marginTop: '40px' }}>Visual Identity</h2>
      
      <h3>Logo</h3>
      <ul>
        <li>Navy (#1A2332) on white backgrounds</li>
        <li>White on dark backgrounds</li>
        <li>Minimum size: 48px height</li>
      </ul>

      <h3>Do's and Don'ts</h3>
      <ul style={{ columnCount: 2, columnGap: '40px' }}>
        <li style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>✓ Use active voice</li>
        <li style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>✓ Show real work (not software)</li>
        <li style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>✓ Be specific and clear</li>
        <li style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>✓ Test with real users</li>
        <li style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>✗ Use passive voice</li>
        <li style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>✗ Use generic stock photos</li>
        <li style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>✗ Be vague ("error occurred")</li>
        <li style={{ pageBreakInside: 'avoid', breakInside: 'avoid' }}>✗ Use industry jargon</li>
      </ul>

      <h2 style={{ marginTop: '40px' }}>Imagery</h2>
      
      <h3>Photography Style</h3>
      <p><strong>Show the REAL work, not the software:</strong></p>
      <ul>
        <li>✓ Real drivers using mobile app (POD)</li>
        <li>✓ Dispatchers at desks with maps</li>
        <li>✓ Actual trucks (diverse types)</li>
        <li>✓ Yards, dealerships in context</li>
        <li>✓ Natural lighting, action shots</li>
        <li>✗ Generic stock photos (people in suits)</li>
        <li>✗ Outdated vehicles</li>
        <li>✗ Computer screens in focus</li>
        <li>✗ Competitors' branding</li>
      </ul>

      <h3>Illustration Style</h3>
      <p>If using custom illustrations:</p>
      <ul>
        <li>Consistent line weight</li>
        <li>Warm, professional color palette (use brand colors)</li>
        <li>Inviting, approachable style</li>
        <li>Show workflow and action</li>
        <li>Diverse representation</li>
      </ul>

      <h2 style={{ marginTop: '40px' }}>Component Principles</h2>
      
      <Table
        headers={['Principle', 'What It Means']}
        rows={[
          ['Consistency', 'Same component looks same everywhere'],
          ['Clarity', 'Never guess what a button does'],
          ['Feedback', 'Every action has visible feedback'],
          ['Accessibility', 'Works for everyone (keyboard, screenreaders, colorblind)'],
          ['Efficiency', 'Minimal clicks to complete tasks'],
        ]}
      />

      <h2 style={{ marginTop: '40px' }}>Color Usage</h2>
      <Table
        headers={['Color', 'Use for', 'Do NOT use for']}
        rows={[
          ['Primary Blue (#77c2f7)', 'Focus states, links, checked/selected, secondary CTAs', 'Page backgrounds, primary action buttons'],
          ['Primary Orange (#FAA61A)', 'Primary action buttons, critical CTAs', 'Links (use Blue), error states (use Red)'],
          ['Dark Navy (#1A2332)', 'Header/navigation, primary text', 'Interactive elements, light backgrounds'],
          ['Error Red (#ED5958)', 'Error messages, invalid fields, destructive actions', 'Success states (use Green), information (use Blue)'],
          ['Success Green (#9ACF30)', 'Success messages, completed states, confirmations', 'Errors (use Red), links (use Blue)'],
        ]}
      />

      <h2 style={{ marginTop: '40px' }}>Writing Guidelines</h2>

      <h3>Buttons & CTAs</h3>
      <ul>
        <li>Action-oriented verbs: Book, Create, Export, Send, Confirm</li>
        <li>Clear and concise: 1–3 words max</li>
        <li>Never apologetic: ✗ "Sorry, please try again" → ✓ "Try again"</li>
      </ul>

      <h3>Form Labels</h3>
      <ul>
        <li>Specific: ✓ "Phone Number" not ✗ "Phone"</li>
        <li>Required indicator: Asterisk (*) for required fields</li>
        <li>Helpful hints below field: "Format: +1 (555) 000-0000"</li>
      </ul>

      <h3>Error Messages</h3>
      <Table
        headers={['Avoid', 'Use instead']}
        rows={[
          ['Error', 'Email address already in use'],
          ['Invalid', 'Use 8+ characters, including uppercase'],
          ["Wrong!", "Doesn't match password"],
        ]}
      />

      <h3>Empty States</h3>
      <ul>
        <li>Acknowledge: "No bookings yet"</li>
        <li>Encourage action: "Create your first booking"</li>
        <li>Provide path: "Click 'New Booking' to get started"</li>
      </ul>

      <h3>Success Messages</h3>
      <ul>
        <li>Celebratory: "Booking confirmed!"</li>
        <li>Next step: "Driver assigned. You'll receive updates via SMS."</li>
        <li>Link to action: "View booking details or create another"</li>
      </ul>

      <h2 style={{ marginTop: '40px' }}>Brand Expression Matrix</h2>
      <Table
        headers={['Situation', 'Expression', 'Example']}
        rows={[
          ['Happy Path', 'Celebratory, empowering', 'Booking confirmed! Driver assigned.'],
          ['Error', 'Helpful, specific', 'Phone must be 10+ digits. Try +1 (555) 000-0000'],
          ['Loading', 'Transparent, patient', 'Loading bookings... (with spinner)'],
          ['Empty', 'Encouraging, supportive', 'No labels yet. Create one to organize bookings.'],
          ['Success', 'Affirming', '✓ Booking updated'],
        ]}
      />

      <h2 style={{ marginTop: '40px' }}>When in Doubt</h2>
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderLeft: '4px solid #77c2f7', borderRadius: '4px', marginTop: '20px' }}>
        <p style={{ margin: 0, fontStyle: 'italic' }}>
          "Does this reflect Blink's mission to empower drivers and dispatchers with simple, real tools?"
        </p>
        <p style={{ margin: '12px 0 0 0' }}>
          <strong>If yes</strong> → ship it<br/>
          <strong>If no</strong> → refine it
        </p>
      </div>
    </div>
  ),
};
