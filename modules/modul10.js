// ============================================
// MODUL 10 - SISTEM CONTINUOUS AUDIT & CONTINUOUS MONITORING (CACM)
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_cacm = {
    id: 'modul_cacm',
    title: 'Modul 10 - Sistem CACM',
    subtitle: 'Continuous Audit & Continuous Monitoring - Automated Rules, Exception Detection & Finding',
    icon: '🔍',
    menuTitle: 'CACM',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem CACM',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Membangun sistem CACM terintegrasi dengan automated audit rules, 
                         exception detection, finding management workflow, dan dashboard analytics
                         yang terintegrasi dengan semua modul operasional untuk audit real-time.`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Audit:</strong> Manual, periodik (tahunan)<br>
                         <strong>2. Sampling:</strong> Manual, coverage rendah<br>
                         <strong>3. Detection:</strong> Terlambat, tidak real-time<br>
                         <strong>4. Analysis:</strong> Excel, time-consuming<br>
                         <strong>5. Follow-up:</strong> Tidak termonitor`
            },
            {
                icon: '⚙️',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Automated Audit Rules',
                content: `<strong>R-FIN-001:</strong> Large Transaction > Rp 1M (High)<br>
                         <strong>R-FIN-002:</strong> Duplicate Payment (Critical)<br>
                         <strong>R-HR-001:</strong> Ghost Employee (High)<br>
                         <strong>R-PRJ-001:</strong> Progress Lag > 15% (High)<br>
                         <strong>R-OPS-001:</strong> Overcapacity Ferry (Critical)`
            },
            {
                icon: '🔔',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Exception Detection & Alert',
                content: `<strong>Detection:</strong> Rule execution real-time/daily<br>
                         <strong>Alert:</strong> Email + Dashboard + Push<br>
                         <strong>Severity:</strong> Low → Medium → High → Critical<br>
                         <strong>Status:</strong> Detected → Investigating → Confirmed/False Positive`
            },
            {
                icon: '📋',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Finding Management Workflow',
                content: `🔴 <strong>Open:</strong> Baru, pending action<br>
                         🟡 <strong>In Progress:</strong> Remediation ongoing<br>
                         🔵 <strong>Pending Verify:</strong> Awaiting audit review<br>
                         🟢 <strong>Closed:</strong> Verified & closed<br>
                         ⚫ <strong>Overdue:</strong> Past deadline`
            },
            {
                icon: '🔗',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Integrasi Semua Modul',
                content: `<strong>Keuangan:</strong> Jurnal, Pembayaran, AR<br>
                         <strong>Human Capital:</strong> Payroll, Presensi<br>
                         <strong>Bagian Umum:</strong> PO, Aset<br>
                         <strong>Teknik:</strong> Progress, Billing<br>
                         <strong>Transportasi/PRSU:</strong> Operasional`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem CACM',
        mermaid: `flowchart TB
subgraph RULES["⚙️ AUTOMATED RULES"]
    direction TB
    R1[Define<br>Audit Rules] --> R2[Schedule<br>Execution]
    R2 --> R3[Execute vs<br>Data Source]
end

subgraph DETECT["🔔 EXCEPTION DETECTION"]
    direction TB
    D1[Scan<br>Transactions] --> D2{Exception<br>Found?}
    D2 -->|Ya| D3[Create<br>Exception]
    D2 -->|Tidak| D4[Log &<br>Continue]
    D3 --> D5{Severity?}
    D5 -->|Critical/High| D6[🚨 Alert<br>Immediate]
    D5 -->|Medium/Low| D7[📋 Queue<br>Review]
end

subgraph FINDING["📋 FINDING WORKFLOW"]
    direction TB
    F1[🔴 Open<br>Finding] --> F2[Assign<br>to Auditee]
    F2 --> F3[🟡 In<br>Progress]
    F3 --> F4[Submit<br>Remediation]
    F4 --> F5[🔵 Pending<br>Verify]
    F5 --> F6{Verified?}
    F6 -->|Ya| F7[🟢 Closed]
    F6 -->|Tidak| F3
end

R3 --> D1
D6 --> F1
D7 --> F1

style RULES fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style DETECT fill:#fef3c7,stroke:#f59e0b,color:#78350f
style FINDING fill:#dcfce7,stroke:#22c55e,color:#166534`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem CACM',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard CACM -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                        <span class="mockup-title">🔍 Dashboard CACM</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Critical Exceptions</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">3</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🔴 Immediate Action</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Open Findings</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">12</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟡 Pending Action</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Closed This Month</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">28</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟢 Resolved</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Active Rules</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">24</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">⚙️ Automated</div>
                            </div>
                        </div>

                        <!-- Alert Banner -->
                        <div style="background: #fef2f2; border: 1px solid #ef4444; padding: 0.75rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; animation: pulse 2s infinite;">
                            <span style="font-size: 1.25rem;">🚨</span>
                            <div style="font-size: 0.85rem;">
                                <strong>CRITICAL:</strong> 3 new exceptions detected - Duplicate Payment (2), Overcapacity Ferry (1)
                            </div>
                        </div>
                        <style>
                            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
                        </style>
                    </div>
                </div>

                <!-- Audit Rules -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                        <span class="mockup-title">⚙️ Audit Rules Configuration</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #7c3aed;">+ Add Rule</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Rule ID</th>
                                    <th>Nama Rule</th>
                                    <th>Modul</th>
                                    <th>Schedule</th>
                                    <th>Severity</th>
                                    <th>Status</th>
                                    <th>Last Run</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-family: monospace;">R-FIN-001</td>
                                    <td>Large Transaction > Rp 1M tanpa approval</td>
                                    <td>💰 Keuangan</td>
                                    <td>Real-time</td>
                                    <td><span style="background: #f97316; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">High</span></td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Active</span></td>
                                    <td style="font-size: 0.75rem;">5 min ago</td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">R-FIN-002</td>
                                    <td>Duplicate Payment (same vendor+amount)</td>
                                    <td>💰 Keuangan</td>
                                    <td>Daily</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Critical</span></td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Active</span></td>
                                    <td style="font-size: 0.75rem;">Today 06:00</td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">R-HR-001</td>
                                    <td>Ghost Employee (no attendance 30 days)</td>
                                    <td>👥 HC</td>
                                    <td>Weekly</td>
                                    <td><span style="background: #f97316; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">High</span></td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Active</span></td>
                                    <td style="font-size: 0.75rem;">Mon 08:00</td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">R-OPS-001</td>
                                    <td>Ferry Overcapacity > 100%</td>
                                    <td>🚢 Transport</td>
                                    <td>Real-time</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Critical</span></td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Active</span></td>
                                    <td style="font-size: 0.75rem;">2 min ago</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Exception List -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);">
                        <span class="mockup-title">🚨 Exception Detected</span>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Exception ID</th>
                                    <th>Rule</th>
                                    <th>Detail</th>
                                    <th>Severity</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td style="font-family: monospace;">EX-2026-0125</td>
                                    <td>R-FIN-002</td>
                                    <td>Duplicate: PT Jaya - Rp 45.5M (18 Jan)</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 Critical</span></td>
                                    <td><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Investigating</span></td>
                                    <td>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">View</button>
                                    </td>
                                </tr>
                                <tr style="background: #fef2f2;">
                                    <td style="font-family: monospace;">EX-2026-0124</td>
                                    <td>R-OPS-001</td>
                                    <td>KM Toba I - 105% capacity (17 Jan 14:00)</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 Critical</span></td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">New</span></td>
                                    <td>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">View</button>
                                    </td>
                                </tr>
                                <tr style="background: #fff7ed;">
                                    <td style="font-family: monospace;">EX-2026-0122</td>
                                    <td>R-FIN-001</td>
                                    <td>Rp 2.5M tanpa approval L2 (voucher #1234)</td>
                                    <td><span style="background: #f97316; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟠 High</span></td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Confirmed</span></td>
                                    <td>
                                        <button style="background: #8b5cf6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Finding</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Finding Status -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">📋 Finding & Remediation Tracker</span>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Finding ID</th>
                                    <th>Finding</th>
                                    <th>PIC</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th>Aging</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td style="font-family: monospace;">FND-2026-018</td>
                                    <td>Pembayaran tanpa approval berjenjang</td>
                                    <td>Bagian Keuangan</td>
                                    <td>25 Jan 2026</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 Open</span></td>
                                    <td>3 hari</td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">FND-2026-015</td>
                                    <td>Ghost employee teridentifikasi</td>
                                    <td>HRD</td>
                                    <td>20 Jan 2026</td>
                                    <td><span style="background: #eab308; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟡 In Progress</span></td>
                                    <td>8 hari</td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">FND-2026-012</td>
                                    <td>Project cost overrun 15%</td>
                                    <td>Divisi Teknik</td>
                                    <td>15 Jan 2026</td>
                                    <td><span style="background: #3b82f6; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔵 Pending Verify</span></td>
                                    <td>12 hari</td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">FND-2026-010</td>
                                    <td>Split PO untuk hindari limit</td>
                                    <td>Bagian Umum</td>
                                    <td>10 Jan 2026</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟢 Closed</span></td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Exception Trend -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">📊 Exception Trend - Last 6 Months</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: flex; align-items: flex-end; gap: 1rem; height: 150px; padding: 1rem 0;">
                            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                                <div style="width: 100%; background: linear-gradient(to top, #22c55e 60%, #eab308 30%, #ef4444 10%); height: 60px; border-radius: 4px 4px 0 0;"></div>
                                <span style="font-size: 0.75rem; margin-top: 0.5rem;">Aug</span>
                                <span style="font-size: 0.65rem; color: #64748b;">15</span>
                            </div>
                            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                                <div style="width: 100%; background: linear-gradient(to top, #22c55e 55%, #eab308 35%, #ef4444 10%); height: 80px; border-radius: 4px 4px 0 0;"></div>
                                <span style="font-size: 0.75rem; margin-top: 0.5rem;">Sep</span>
                                <span style="font-size: 0.65rem; color: #64748b;">22</span>
                            </div>
                            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                                <div style="width: 100%; background: linear-gradient(to top, #22c55e 50%, #eab308 30%, #ef4444 20%); height: 100px; border-radius: 4px 4px 0 0;"></div>
                                <span style="font-size: 0.75rem; margin-top: 0.5rem;">Oct</span>
                                <span style="font-size: 0.65rem; color: #64748b;">28</span>
                            </div>
                            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                                <div style="width: 100%; background: linear-gradient(to top, #22c55e 65%, #eab308 25%, #ef4444 10%); height: 75px; border-radius: 4px 4px 0 0;"></div>
                                <span style="font-size: 0.75rem; margin-top: 0.5rem;">Nov</span>
                                <span style="font-size: 0.65rem; color: #64748b;">18</span>
                            </div>
                            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                                <div style="width: 100%; background: linear-gradient(to top, #22c55e 70%, #eab308 22%, #ef4444 8%); height: 55px; border-radius: 4px 4px 0 0;"></div>
                                <span style="font-size: 0.75rem; margin-top: 0.5rem;">Dec</span>
                                <span style="font-size: 0.65rem; color: #64748b;">12</span>
                            </div>
                            <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                                <div style="width: 100%; background: linear-gradient(to top, #22c55e 60%, #eab308 25%, #ef4444 15%); height: 68px; border-radius: 4px 4px 0 0;"></div>
                                <span style="font-size: 0.75rem; margin-top: 0.5rem;">Jan</span>
                                <span style="font-size: 0.65rem; color: #64748b;">15</span>
                            </div>
                        </div>

                        <!-- Legend -->
                        <div style="display: flex; gap: 1.5rem; justify-content: center; font-size: 0.75rem; margin-top: 0.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 12px; height: 12px; background: #22c55e; border-radius: 2px;"></div>
                                <span>Closed</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 12px; height: 12px; background: #eab308; border-radius: 2px;"></div>
                                <span>In Progress</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 12px; height: 12px; background: #ef4444; border-radius: 2px;"></div>
                                <span>Open</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// ============================================
// REGISTER MODULE
// ============================================
if (typeof window.ppsuModules === 'undefined') {
    window.ppsuModules = [];
}
window.ppsuModules.push(modul_cacm);
