<template>
  <section id="about" class="about-section">
    <div class="about-content">
      <div class="about-text animate-fade-in-up">
        <h2>Why Choose Us</h2>
        <p>We believe every business deserves world-class software. Our templates are built by industry experts and designed for growth.</p>
        <p>Each template comes fully customizable, ready to integrate with your business workflows and scale with your success.</p>
        <div class="about-highlights">
          <div class="highlight" v-for="(highlight, index) in highlights" :key="index">
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>

      <div class="visual-showcase animate-fade-in">
        <div class="showcase-panel">
          <div class="showcase-header">
            <span class="badge">Live preview</span>
            <div>
              <h3>Visual Showcase</h3>
              <p>Interact with a sample dashboard to preview rich analytics, quick actions, and live status indicators.</p>
            </div>
          </div>

          <div class="tab-row">
            <button
              v-for="tab in showcaseTabs"
              :key="tab.id"
              class="tab-button"
              :class="{ active: activeTab === tab.id }"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="showcase-grid">
            <div class="mini-card stats-card">
              <div class="card-title">Summary</div>
              <div class="stat-row" v-for="(item, index) in activePanel.summary" :key="index">
                <span>{{ item.label }}</span>
                <strong>{{ item.value }}</strong>
              </div>
            </div>

            <div class="main-card">
              <div class="main-card-header">
                <div>
                  <p class="mini-label">{{ activePanel.subtitle }}</p>
                  <h3>{{ activePanel.title }}</h3>
                </div>
                <button>{{ activePanel.action }}</button>
              </div>

              <div class="metric-row">
                <div class="metric-block" v-for="(metric, index) in activePanel.metrics" :key="index">
                  <span>{{ metric.label }}</span>
                  <strong>{{ metric.value }}</strong>
                </div>
              </div>

              <div class="chart-grid">
                <div
                  v-for="(bar, index) in activePanel.chart"
                  :key="index"
                  class="chart-bar"
                  :class="bar.variant"
                  :style="{ height: bar.height }"
                ></div>
              </div>

              <div class="card-footer">
                <span>{{ activePanel.footerLabel }}</span>
                <strong>{{ activePanel.footerValue }}</strong>
              </div>
            </div>

            <div class="mini-card feature-card">
              <div class="card-title">Quick actions</div>
              <div class="feature-pill" v-for="pill in activePanel.pills" :key="pill">{{ pill }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      activeTab: 'overview',
      highlights: [
        {
          title: 'Fast Deployment',
          description: 'Launch in days instead of months with our pre-built, production-ready templates.'
        },
        {
          title: 'Fully Customizable',
          description: 'Every template adapts to your brand, your processes, and your unique business needs.'
        },
        {
          title: 'Expert Support',
          description: 'Our team of developers and designers is here to help at every step of your journey.'
        },
        {
          title: 'Always Evolving',
          description: 'Regular updates and new templates keep your app competitive and feature-rich.'
        }
      ],
      showcaseTabs: [
        {
          id: 'overview',
          label: 'Overview',
          subtitle: 'Workspace overview',
          title: 'Campaign Center',
          action: 'Launch',
          summary: [
            { label: 'Visitors', value: '18.2K' },
            { label: 'Conversion', value: '12.4%' },
            { label: 'Revenue', value: '$92K' }
          ],
          metrics: [
            { label: 'Active', value: '76' },
            { label: 'Pending', value: '12' },
            { label: 'New', value: '8' }
          ],
          chart: [
            { height: '72%', variant: 'bar-1' },
            { height: '58%', variant: 'bar-2' },
            { height: '88%', variant: 'bar-3' },
            { height: '46%', variant: 'bar-4' },
            { height: '66%', variant: 'bar-5' }
          ],
          pills: ['Analytics', 'Content', 'Collaboration'],
          footerLabel: 'Last update',
          footerValue: '2 minutes ago'
        },
        {
          id: 'analytics',
          label: 'Analytics',
          subtitle: 'Real-time insights',
          title: 'Analytics Suite',
          action: 'Review',
          summary: [
            { label: 'Sessions', value: '42K' },
            { label: 'Bounce', value: '18%' },
            { label: 'Growth', value: '9.1%' }
          ],
          metrics: [
            { label: 'CTR', value: '4.8%' },
            { label: 'Avg time', value: '3m 22s' },
            { label: 'Queries', value: '512' }
          ],
          chart: [
            { height: '82%', variant: 'bar-1' },
            { height: '68%', variant: 'bar-2' },
            { height: '54%', variant: 'bar-3' },
            { height: '78%', variant: 'bar-4' },
            { height: '60%', variant: 'bar-5' }
          ],
          pills: ['Trends', 'Top pages', 'A/B tests'],
          footerLabel: 'Updated',
          footerValue: 'Just now'
        },
        {
          id: 'messages',
          label: 'Messages',
          subtitle: 'Customer feedback',
          title: 'Team Inbox',
          action: 'Respond',
          summary: [
            { label: 'Open', value: '24' },
            { label: 'Resolved', value: '190' },
            { label: 'New', value: '8' }
          ],
          metrics: [
            { label: 'Avg reply', value: '15m' },
            { label: 'CSAT', value: '94%' },
            { label: 'SLA', value: '99.2%' }
          ],
          chart: [
            { height: '56%', variant: 'bar-1' },
            { height: '72%', variant: 'bar-2' },
            { height: '64%', variant: 'bar-3' },
            { height: '82%', variant: 'bar-4' },
            { height: '50%', variant: 'bar-5' }
          ],
          pills: ['Reply', 'Assign', 'Review'],
          footerLabel: 'Next check',
          footerValue: '5 minutes'
        }
      ]
    }
  },
  computed: {
    activePanel() {
      return this.showcaseTabs.find(tab => tab.id === this.activeTab) || this.showcaseTabs[0]
    }
  }
}
</script>

<style scoped>
.about-section {
  padding: 100px 20px;
  background: #000000;
  border-bottom: 1px solid #333333;
}

.about-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  text-align: center;
}

.about-text h2 {
  font-size: 48px;
  margin-bottom: 30px;
  font-weight: 800;
  letter-spacing: -1px;
}

.about-text p {
  font-size: 16px;
  color: #cccccc;
  line-height: 1.85;
  margin-bottom: 20px;
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 30px;
  text-align: left;
}

.highlight {
  background: #111111;
  padding: 24px;
  border: 1px solid #2e2e2e;
  border-radius: 18px;
  transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
}

.highlight:hover {
  background: linear-gradient(180deg, rgba(42,42,42,1) 0%, rgba(20,20,20,1) 100%);
  border-color: #555555;
  transform: translateY(-4px);
}

.highlight h3 {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  color: #ffffff;
}

.highlight p {
  font-size: 14px;
  color: #b8b8b8;
  margin: 0;
}

.visual-showcase {
  background: linear-gradient(180deg, #111111 0%, #0f1218 100%);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 30px;
  min-height: 420px;
  max-height: 520px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 30px;
}

.showcase-panel {
  width: 100%;
  max-width: 520px;
  max-height: 100%;
  overflow-y: auto;
  padding-right: 8px;
}

.showcase-panel::-webkit-scrollbar {
  width: 8px;
}

.showcase-panel::-webkit-scrollbar-track {
  background: transparent;
}

.showcase-panel::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.14);
  border-radius: 999px;
}

.showcase-header {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 30px;
  text-align: left;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  background: rgba(103, 201, 255, 0.12);
  color: #67c9ff;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.showcase-header p {
  font-size: 14px;
  line-height: 1.8;
  color: #c3c7d1;
  max-width: 420px;
}

.tab-row {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.tab-button {
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03);
  color: #d0d7e5;
  padding: 10px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.25s ease;
}

.tab-button:hover,
.tab-button.active {
  background: rgba(49, 118, 255, 0.15);
  border-color: rgba(97, 180, 255, 0.35);
  color: #ffffff;
}

.showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr 0.9fr;
  gap: 18px;
}

.mini-card,
.main-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 22px;
  color: #edf2f7;
}

.card-title {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #79c0ff;
  margin-bottom: 18px;
}

.stats-card .stat-row,
.feature-card .feature-pill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.stats-card .stat-row span,
.metric-block span,
.card-footer span {
  color: #9ba7b8;
  font-size: 13px;
}

.stats-card .stat-row strong {
  font-size: 16px;
  color: #ffffff;
}

.main-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 22px;
}

.mini-label {
  color: #8ea6bf;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}

.main-card-header h3 {
  font-size: 20px;
  margin: 0;
}

.main-card-header button {
  border: none;
  background: linear-gradient(135deg, #6cc8ff, #3e90ff);
  color: #fff;
  font-weight: 700;
  border-radius: 999px;
  padding: 10px 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.main-card-header button:hover {
  transform: translateY(-1px);
  box-shadow: 0 15px 35px rgba(62, 144, 255, 0.15);
}

.metric-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.metric-block {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 14px 12px;
}

.metric-block strong {
  display: block;
  margin-top: 8px;
  font-size: 18px;
  color: #ffffff;
}

.chart-grid {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  height: 120px;
  padding: 10px 4px;
  background: rgba(255,255,255,0.03);
  border-radius: 18px;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(180deg, #5fc3ff 0%, #176bb7 100%);
  border-radius: 999px;
  position: relative;
}

.chart-bar::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  width: 36px;
  height: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: 999px;
  transform: translateX(-50%);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  font-size: 13px;
}

.card-footer strong {
  color: #ffffff;
}

.feature-card {
  display: flex;
  flex-direction: column;
}

.feature-pill {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px;
  padding: 12px 14px;
  color: #dbe5ff;
}

.feature-pill:last-child {
  margin-bottom: 0;
}

.visual-showcase::before,
.visual-showcase::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.35;
}

.visual-showcase::before {
  width: 220px;
  height: 220px;
  background: rgba(57, 170, 255, 0.18);
  top: -60px;
  right: -60px;
}

.visual-showcase::after {
  width: 180px;
  height: 180px;
  background: rgba(108, 201, 255, 0.12);
  bottom: -40px;
  left: -40px;
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .showcase-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 80px 16px;
  }

  .about-text h2 {
    font-size: 36px;
  }

  .about-highlights {
    grid-template-columns: 1fr;
  }

  .visual-showcase {
    min-height: auto;
    padding: 24px;
  }

  .showcase-panel {
    max-width: 100%;
  }

  .main-card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .metric-row {
    grid-template-columns: 1fr;
  }
}
</style>
