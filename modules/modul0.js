// ============================================
// MODUL 0 - DASHBOARD TOP MANAGEMENT (EXECUTIVE DASHBOARD)
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_dashboard = {
    id: 'modul_dashboard',
    title: 'Dashboard Top Management',
    subtitle: 'Executive Summary - Konsolidasi KPI dari Seluruh Unit Bisnis',
    icon: '📊',
    menuTitle: '📊 Dashboard Eksekutif',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Dashboard Top Management',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Dashboard',
                content: `Menyediakan single source of truth dengan dashboard interaktif yang menampilkan
                         KPI real-time dari seluruh unit bisnis, early warning alerts, dan
                         kemampuan drill-down untuk mendukung pengambilan keputusan eksekutif.`
            },
            {
                icon: '💰',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Financial Overview',
                content: `<strong>Revenue YTD:</strong> Total pendapatan tahun berjalan<br>
                         <strong>Net Profit:</strong> Target > 15%<br>
                         <strong>Cashflow:</strong> Posisi kas real-time<br>
                         <strong>AR Aging:</strong> Collection rate > 90%<br>
                         <strong>Budget Realization:</strong> Target > 85%`
            },
            {
                icon: '⚙️',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Operational Overview',
                content: `<strong>🚢 Transportasi:</strong> Passengers, Utilization, Revenue<br>
                         <strong>🏛️ PRSU:</strong> Events, Occupancy, Revenue<br>
                         <strong>🏗️ Teknik:</strong> Projects Status, SPI, Billing<br>
                         <strong>👥 HC:</strong> Headcount, Attendance, Turnover`
            },
            {
                icon: '⚠️',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Risk & Compliance',
                content: `<strong>Risk Heat Map:</strong> Summary dari Modul Risiko<br>
                         <strong>KRI Status:</strong> Green/Yellow/Red indicators<br>
                         <strong>CACM:</strong> Open findings & exceptions<br>
                         <strong>Compliance Score:</strong> Tingkat kepatuhan`
            },
            {
                icon: '🔔',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Consolidated Alert Center',
                content: `🔴 <strong>Critical:</strong> Extreme risk, CACM critical, Overcapacity<br>
                         🟠 <strong>Warning:</strong> High risk, KRI breach, Project delay<br>
                         🟡 <strong>Info:</strong> Medium risk, Pending approval<br>
                         <strong>Real-time push</strong> notification ke Direksi`
            },
            {
                icon: '📱',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Features',
                content: `<strong>Real-time:</strong> Data refresh 5-15 menit<br>
                         <strong>Drill-down:</strong> Klik untuk detail per modul<br>
                         <strong>Custom:</strong> Layout dashboard sesuai preferensi<br>
                         <strong>Reports:</strong> Auto-generate PDF/PPT<br>
                         <strong>Mobile:</strong> Responsive untuk akses mobile`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Arsitektur - Dashboard Top Management',
        mermaid: `flowchart TB
subgraph DASHBOARD["📊 DASHBOARD TOP MANAGEMENT"]
    direction TB
    D1[Executive<br>Summary]
    D1 --> D2[💰 Kinerja<br>Keuangan]
    D1 --> D3[🏢 Kinerja<br>Unit Bisnis]
    D1 --> D4[📈 Budget vs<br>Aktual]
    D1 --> D5[⚠️ Risiko &<br>Temuan Audit]
    D1 --> D6[🏦 Saldo<br>Bank/Giro]
    D1 --> D7[✅ Approval<br>Center]
end

subgraph KEUANGAN["💰 DATA KEUANGAN"]
    K1[Revenue] --> D2
    K2[Profit] --> D2
    K3[Cashflow] --> D6
    K4[AR/AP] --> D2
end

subgraph BUDGET["📈 BUDGET & KPI"]
    B1[RKA] --> D4
    B2[Realisasi] --> D4
    D4 --> B3{Early<br>Warning?}
    B3 -->|> 80%| B4[🟡 Warning]
    B3 -->|> 100%| B5[🔴 Over]
end

subgraph OPERASIONAL["🏢 UNIT BISNIS"]
    O1[🚢 Transport] --> D3
    O2[🏛️ PRSU] --> D3
    O3[🏗️ Teknik] --> D3
    O4[👥 HC] --> D3
end

subgraph GOVERNANCE["⚠️ RISIKO & CACM"]
    G1[Risk Heat<br>Map] --> D5
    G2[Temuan<br>Audit] --> D5
    G3[KRI<br>Breach] --> ALERT
end

subgraph APPROVAL["✅ OTORISASI"]
    A1[Pending<br>Approval] --> D7
    D7 --> A2{Action}
    A2 -->|Approve| A3[✅ Done]
    A2 -->|Reject| A4[❌ Reject]
end

B4 --> ALERT[🔔 ALERT<br>CENTER]
B5 --> ALERT
G2 --> ALERT
ALERT --> NOTIF[📱 Push<br>Notification]

style DASHBOARD fill:#1e40af,stroke:#3b82f6,color:#ffffff
style KEUANGAN fill:#dcfce7,stroke:#22c55e,color:#166534
style BUDGET fill:#fef3c7,stroke:#f59e0b,color:#78350f
style OPERASIONAL fill:#f3e8ff,stroke:#a855f7,color:#581c87
style GOVERNANCE fill:#fef2f2,stroke:#ef4444,color:#7f1d1d
style APPROVAL fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Dashboard Top Management',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI - Executive Dashboard</h3>
                </div>
                
                <!-- Main Dashboard -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);">
                        <span class="mockup-title">📊 Dashboard Eksekutif - PT PPSU</span>
                        <div class="mockup-actions">
                            <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">
                                🔔 5 Alerts
                            </span>
                            <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">
                                Last Update: 03:50
                            </span>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Top KPI Cards -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px;">
                                <div style="font-size: 0.7rem; opacity: 0.9;">💰 Revenue YTD</div>
                                <div style="font-size: 1.75rem; font-weight: 700;">Rp 125.5 M</div>
                                <div style="font-size: 0.65rem; margin-top: 0.25rem;">
                                    <span style="background: rgba(255,255,255,0.3); padding: 0.125rem 0.375rem; border-radius: 4px;">▲ 12% vs LY</span>
                                </div>
                            </div>
                            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 1rem; border-radius: 12px;">
                                <div style="font-size: 0.7rem; opacity: 0.9;">📈 Net Profit</div>
                                <div style="font-size: 1.75rem; font-weight: 700;">18.5%</div>
                                <div style="font-size: 0.65rem; margin-top: 0.25rem;">
                                    <span style="background: rgba(255,255,255,0.3); padding: 0.125rem 0.375rem; border-radius: 4px;">Target: 15%</span>
                                </div>
                            </div>
                            <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 1rem; border-radius: 12px;">
                                <div style="font-size: 0.7rem; opacity: 0.9;">💵 Cashflow</div>
                                <div style="font-size: 1.75rem; font-weight: 700;">Rp 45.2 M</div>
                                <div style="font-size: 0.65rem; margin-top: 0.25rem;">
                                    <span style="background: rgba(255,255,255,0.3); padding: 0.125rem 0.375rem; border-radius: 4px;">✅ Healthy</span>
                                </div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px;">
                                <div style="font-size: 0.7rem; opacity: 0.9;">📊 Budget Realization</div>
                                <div style="font-size: 1.75rem; font-weight: 700;">87%</div>
                                <div style="font-size: 0.65rem; margin-top: 0.25rem;">
                                    <span style="background: rgba(255,255,255,0.3); padding: 0.125rem 0.375rem; border-radius: 4px;">Target: 85%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Two Column Layout -->
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-top: 1.5rem;">
                    <!-- Revenue by Business Unit -->
                    <div class="prototype-mockup" style="margin: 0;">
                        <div class="mockup-header">
                            <span class="mockup-title">📊 Revenue by Business Unit</span>
                        </div>
                        <div class="mockup-content">
                            <div style="display: flex; gap: 1rem; align-items: flex-end; height: 120px; padding-bottom: 1rem; border-bottom: 1px solid #e2e8f0;">
                                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                                    <div style="width: 100%; background: linear-gradient(to top, #3b82f6, #60a5fa); height: 100px; border-radius: 4px 4px 0 0;"></div>
                                    <span style="font-size: 0.7rem; margin-top: 0.5rem;">🚢 Transport</span>
                                    <span style="font-size: 0.65rem; color: #64748b; font-weight: 600;">Rp 56.5 M</span>
                                </div>
                                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                                    <div style="width: 100%; background: linear-gradient(to top, #8b5cf6, #a78bfa); height: 70px; border-radius: 4px 4px 0 0;"></div>
                                    <span style="font-size: 0.7rem; margin-top: 0.5rem;">🏛️ PRSU</span>
                                    <span style="font-size: 0.65rem; color: #64748b; font-weight: 600;">Rp 37.6 M</span>
                                </div>
                                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                                    <div style="width: 100%; background: linear-gradient(to top, #f59e0b, #fbbf24); height: 55px; border-radius: 4px 4px 0 0;"></div>
                                    <span style="font-size: 0.7rem; margin-top: 0.5rem;">🏗️ Proyek</span>
                                    <span style="font-size: 0.65rem; color: #64748b; font-weight: 600;">Rp 31.4 M</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Critical Alerts -->
                    <div class="prototype-mockup" style="margin: 0;">
                        <div class="mockup-header" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);">
                            <span class="mockup-title">🔔 Critical Alerts</span>
                        </div>
                        <div class="mockup-content" style="padding: 0.5rem;">
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8rem;">
                                <div style="background: #fef2f2; padding: 0.5rem; border-radius: 6px; border-left: 3px solid #ef4444;">
                                    🔴 <strong>2</strong> Extreme Risks detected
                                </div>
                                <div style="background: #fef2f2; padding: 0.5rem; border-radius: 6px; border-left: 3px solid #ef4444;">
                                    🔴 <strong>1</strong> CACM Critical Finding
                                </div>
                                <div style="background: #fff7ed; padding: 0.5rem; border-radius: 6px; border-left: 3px solid #f97316;">
                                    🟠 <strong>3</strong> High Risks need action
                                </div>
                                <div style="background: #fefce8; padding: 0.5rem; border-radius: 6px; border-left: 3px solid #eab308;">
                                    🟡 <strong>5</strong> Pending Approvals
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Operational KPIs -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                        <span class="mockup-title">⚙️ Operational KPIs</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                            <!-- Transportasi -->
                            <div style="background: #f1f5f9; padding: 1rem; border-radius: 8px;">
                                <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.5rem;">🚢 Transportasi</div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
                                    <span>Daily Passengers</span>
                                    <strong>2,450</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
                                    <span>Fleet Utilization</span>
                                    <strong style="color: #22c55e;">85%</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
                                    <span>On-time Rate</span>
                                    <strong style="color: #22c55e;">96%</strong>
                                </div>
                            </div>
                            
                            <!-- PRSU -->
                            <div style="background: #f1f5f9; padding: 1rem; border-radius: 8px;">
                                <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.5rem;">🏛️ PRSU</div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
                                    <span>Events This Month</span>
                                    <strong>18</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
                                    <span>Occupancy Rate</span>
                                    <strong style="color: #22c55e;">68%</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
                                    <span>Pending Approval</span>
                                    <strong style="color: #f59e0b;">5</strong>
                                </div>
                            </div>
                            
                            <!-- Teknik -->
                            <div style="background: #f1f5f9; padding: 1rem; border-radius: 8px;">
                                <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.5rem;">🏗️ Teknik</div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
                                    <span>Active Projects</span>
                                    <strong>8</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
                                    <span>Average SPI</span>
                                    <strong style="color: #f59e0b;">0.92</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
                                    <span>At Risk</span>
                                    <strong style="color: #ef4444;">2</strong>
                                </div>
                            </div>
                            
                            <!-- Human Capital -->
                            <div style="background: #f1f5f9; padding: 1rem; border-radius: 8px;">
                                <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 0.5rem;">👥 Human Capital</div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
                                    <span>Total Employees</span>
                                    <strong>248</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
                                    <span>Attendance Rate</span>
                                    <strong style="color: #22c55e;">96.5%</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
                                    <span>Turnover Rate</span>
                                    <strong style="color: #22c55e;">3.2%</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Risk & CACM Summary -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem;">
                    <!-- Risk Heat Map Mini -->
                    <div class="prototype-mockup" style="margin: 0;">
                        <div class="mockup-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                            <span class="mockup-title">⚠️ Risk Summary</span>
                        </div>
                        <div class="mockup-content">
                            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; text-align: center;">
                                <div style="background: #ef4444; color: white; padding: 0.75rem; border-radius: 8px;">
                                    <div style="font-size: 1.25rem; font-weight: 700;">2</div>
                                    <div style="font-size: 0.65rem;">Extreme</div>
                                </div>
                                <div style="background: #f97316; color: white; padding: 0.75rem; border-radius: 8px;">
                                    <div style="font-size: 1.25rem; font-weight: 700;">5</div>
                                    <div style="font-size: 0.65rem;">High</div>
                                </div>
                                <div style="background: #eab308; color: white; padding: 0.75rem; border-radius: 8px;">
                                    <div style="font-size: 1.25rem; font-weight: 700;">12</div>
                                    <div style="font-size: 0.65rem;">Medium</div>
                                </div>
                                <div style="background: #22c55e; color: white; padding: 0.75rem; border-radius: 8px;">
                                    <div style="font-size: 1.25rem; font-weight: 700;">18</div>
                                    <div style="font-size: 0.65rem;">Low</div>
                                </div>
                            </div>
                            <div style="background: #fef2f2; border: 1px solid #ef4444; padding: 0.5rem; border-radius: 6px; margin-top: 0.75rem; font-size: 0.75rem;">
                                ⚠️ <strong>2 KRI Breach:</strong> AR Aging 🔴, Project SPI 🟡
                            </div>
                        </div>
                    </div>

                    <!-- CACM Summary -->
                    <div class="prototype-mockup" style="margin: 0;">
                        <div class="mockup-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                            <span class="mockup-title">🔍 CACM Summary</span>
                        </div>
                        <div class="mockup-content">
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; text-align: center;">
                                <div style="background: #fef2f2; padding: 0.75rem; border-radius: 8px;">
                                    <div style="font-size: 1.25rem; font-weight: 700; color: #ef4444;">3</div>
                                    <div style="font-size: 0.65rem; color: #64748b;">Critical</div>
                                </div>
                                <div style="background: #fefce8; padding: 0.75rem; border-radius: 8px;">
                                    <div style="font-size: 1.25rem; font-weight: 700; color: #eab308;">12</div>
                                    <div style="font-size: 0.65rem; color: #64748b;">Open Finding</div>
                                </div>
                                <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px;">
                                    <div style="font-size: 1.25rem; font-weight: 700; color: #22c55e;">28</div>
                                    <div style="font-size: 0.65rem; color: #64748b;">Closed MTD</div>
                                </div>
                            </div>
                            <div style="margin-top: 0.75rem; font-size: 0.75rem;">
                                <div style="display: flex; justify-content: space-between; padding: 0.25rem 0; border-bottom: 1px solid #e2e8f0;">
                                    <span>Finding Closure Rate</span>
                                    <strong style="color: #22c55e;">87%</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 0.25rem 0;">
                                    <span>Active Audit Rules</span>
                                    <strong>24</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">🔗 Quick Access - Drill Down to Modules</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem;">
                            <button style="background: #f1f5f9; border: 1px solid #e2e8f0; padding: 0.75rem; border-radius: 8px; cursor: pointer; text-align: center;">
                                <div style="font-size: 1.5rem;">💰</div>
                                <div style="font-size: 0.7rem; margin-top: 0.25rem;">Keuangan</div>
                            </button>
                            <button style="background: #f1f5f9; border: 1px solid #e2e8f0; padding: 0.75rem; border-radius: 8px; cursor: pointer; text-align: center;">
                                <div style="font-size: 1.5rem;">🚢</div>
                                <div style="font-size: 0.7rem; margin-top: 0.25rem;">Transport</div>
                            </button>
                            <button style="background: #f1f5f9; border: 1px solid #e2e8f0; padding: 0.75rem; border-radius: 8px; cursor: pointer; text-align: center;">
                                <div style="font-size: 1.5rem;">🏛️</div>
                                <div style="font-size: 0.7rem; margin-top: 0.25rem;">PRSU</div>
                            </button>
                            <button style="background: #f1f5f9; border: 1px solid #e2e8f0; padding: 0.75rem; border-radius: 8px; cursor: pointer; text-align: center;">
                                <div style="font-size: 1.5rem;">🏗️</div>
                                <div style="font-size: 0.7rem; margin-top: 0.25rem;">Teknik</div>
                            </button>
                            <button style="background: #f1f5f9; border: 1px solid #e2e8f0; padding: 0.75rem; border-radius: 8px; cursor: pointer; text-align: center;">
                                <div style="font-size: 1.5rem;">⚠️</div>
                                <div style="font-size: 0.7rem; margin-top: 0.25rem;">Risiko</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// ============================================
// REGISTER MODULE (Insert at beginning for priority)
// ============================================
if (typeof window.ppsuModules === 'undefined') {
    window.ppsuModules = [];
}
// Add to beginning of array so it appears first
window.ppsuModules.unshift(modul_dashboard);
