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
            },
            {
                icon: '📅',
                iconBg: 'rgba(236, 72, 153, 0.1)',
                iconColor: '#ec4899',
                title: 'Audit Universe & RKPT',
                content: `<strong>🌐 Universe:</strong> Daftar seluruh auditable unit<br>
                         <strong>📊 Risk-Based:</strong> Prioritas berdasar risk assessment<br>
                         <strong>📅 RKPT:</strong> Rencana Kerja Pengawasan Tahunan<br>
                         <strong>📄 Audit Plan:</strong> Jadwal, scope, tim<br>
                         <strong>📝 Tracking:</strong> Progress vs plan`
            },
            {
                icon: '💳',
                iconBg: 'rgba(20, 184, 166, 0.1)',
                iconColor: '#14b8a6',
                title: 'Sampling Transaksi',
                content: `<strong>🎲 Random:</strong> Sampling acak terstandar<br>
                         <strong>🎯 Targeted:</strong> Transaksi high-risk<br>
                         <strong>📊 Statistical:</strong> Confidence level setting<br>
                         <strong>🔄 Automated:</strong> Auto-generate sample list<br>
                         <strong>📝 Workpaper:</strong> Dokumentasi hasil testing`
            },
            {
                icon: '📁',
                iconBg: 'rgba(99, 102, 241, 0.1)',
                iconColor: '#6366f1',
                title: 'Arsip Digital Audit',
                content: `<strong>📄 Kertas Kerja:</strong> Upload workpaper<br>
                         <strong>📷 Evidence:</strong> Foto, screenshot, bukti<br>
                         <strong>📝 LHA:</strong> Laporan Hasil Audit<br>
                         <strong>🔍 Pencarian:</strong> Filter & search<br>
                         <strong>📥 Export:</strong> PDF, Excel`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem CACM',
        mermaid: `flowchart LR

%% ===================== AUDIT UNIVERSE & RKPT =====================
subgraph RKPT["📅 AUDIT UNIVERSE & RKPT"]
    direction TB
    U1[🌐 Audit<br>Universe] --> U2[Risk<br>Assessment]
    U2 --> U3[Prioritas<br>Audit]
    U3 --> U4[📅 RKPT<br>Tahunan]
    U4 --> U5[Timeline<br>per Quarter]
end

%% ===================== AUDIT EXECUTION =====================
subgraph PLAN["📋 AUDIT EXECUTION"]
    direction TB
    P1[Audit<br>Plan] --> P2[🎲 Sampling<br>Transaksi]
    P2 --> P3[Testing &<br>Workpaper]
    P3 --> P4[📁 Upload<br>Evidence]
end

%% ===================== AUTOMATED RULES =====================
subgraph RULES["⚙️ AUTOMATED RULES & RED FLAG"]
    direction TB
    R1[Define<br>Audit Rules] --> R2[Schedule<br>Execution]
    R2 --> R3[Execute vs<br>Data Source]
    R3 --> R4{Exception<br>Found?}

    R4 -->|Ya| R5[🚩 Red Flag<br>Otomatis]
    R4 -->|Tidak| R6[Log &<br>Continue]

    R5 --> R7{Severity?}
    R7 -->|Critical / High| R8[🚨 Alert<br>Immediate]
    R7 -->|Medium / Low| R9[📋 Queue<br>Review]
end

%% ===================== DASHBOARD TEMUAN =====================
subgraph FINDING["📊 DASHBOARD TEMUAN"]
    direction TB
    F1[🔴 Open<br>Finding] --> F2[Assign<br>to PIC]
    F2 --> F3[Set<br>Deadline]
    F3 --> F4[Dashboard<br>Temuan]
end

%% ===================== TINDAK LANJUT =====================
subgraph TINDAK["📈 MONITORING TINDAK LANJUT"]
    direction TB
    T1[🟡 Proses<br>TL] --> T2[Submit<br>Remediation]
    T2 --> T3[🔵 Pending<br>Verify]
    T3 --> T4{Verified?}

    T4 -->|Ya| T5[🟢 Closed]
    T4 -->|Tidak| T1

    T1 --> T6{Overdue?}
    T6 -->|Ya| T7[⚫ Escalate]
    T7 --> T1
end

%% ===================== ARSIP DIGITAL =====================
subgraph ARSIP["📁 ARSIP DIGITAL"]
    direction TB
    A1[📄 LHA] --> A4[Repository<br>Terpusat]
    A2[📝 Kertas Kerja] --> A4
    A3[📷 Evidence] --> A4
    A4 --> A5[🔍 Search &<br>Filter]
    A4 --> A6[📥 Export]
end

%% ===================== RELASI ANTAR MODUL =====================
U5 --> P1
P3 --> F1
R8 --> F1
R9 --> F1
F4 --> T1
P4 --> A3
T5 --> A1

%% ===================== STYLING =====================
style RKPT fill:#fce7f3,stroke:#ec4899,color:#831843
style PLAN fill:#ccfbf1,stroke:#14b8a6,color:#134e4a
style RULES fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style FINDING fill:#fef3c7,stroke:#f59e0b,color:#78350f
style TINDAK fill:#dcfce7,stroke:#22c55e,color:#166534
style ARSIP fill:#e0e7ff,stroke:#6366f1,color:#3730a3
`
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

                <!-- Audit Universe & RKPT -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
                        <span class="mockup-title">📅 Audit Universe & RKPT 2026</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #be185d;">+ Tambah Unit</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- RKPT Summary -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #fce7f3; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #be185d;">24</div>
                                <div style="font-size: 0.7rem; color: #be185d;">Total Auditable Unit</div>
                            </div>
                            <div style="background: #dbeafe; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #1d4ed8;">8</div>
                                <div style="font-size: 0.7rem; color: #1d4ed8;">Dijadwalkan 2026</div>
                            </div>
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #166534;">2</div>
                                <div style="font-size: 0.7rem; color: #166534;">Selesai</div>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #92400e;">1</div>
                                <div style="font-size: 0.7rem; color: #92400e;">Sedang Berjalan</div>
                            </div>
                        </div>

                        <!-- Audit Universe Table -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">🌐 Audit Universe</div>
                        <table class="mockup-table" style="font-size: 0.8rem; margin-bottom: 1rem;">
                            <thead>
                                <tr>
                                    <th>Unit/Proses</th>
                                    <th>Risk Rating</th>
                                    <th>Last Audit</th>
                                    <th>Next Audit</th>
                                    <th>Status RKPT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td>Divisi Keuangan - Pembayaran</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">🔴 High</span></td>
                                    <td>Jun 2025</td>
                                    <td>Jan 2026</td>
                                    <td><span style="background: #3b82f6; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">🔄 Ongoing</span></td>
                                </tr>
                                <tr style="background: #fef2f2;">
                                    <td>Divisi Teknik - Proyek Aktif</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">🔴 High</span></td>
                                    <td>Mar 2025</td>
                                    <td>Mar 2026</td>
                                    <td><span style="background: #94a3b8; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">📅 Scheduled</span></td>
                                </tr>
                                <tr>
                                    <td>Divisi HC - Payroll</td>
                                    <td><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">🟡 Medium</span></td>
                                    <td>Des 2025</td>
                                    <td>Jun 2026</td>
                                    <td><span style="background: #94a3b8; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">📅 Scheduled</span></td>
                                </tr>
                                <tr style="background: #dcfce7;">
                                    <td>Divisi Transportasi - Operasional</td>
                                    <td><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">🟡 Medium</span></td>
                                    <td>Jan 2026</td>
                                    <td>Jul 2026</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">✅ Done</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- RKPT Timeline -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📅 Timeline RKPT 2026</div>
                        <div style="display: flex; gap: 0.25rem; font-size: 0.7rem;">
                            <div style="flex: 1; background: #22c55e; color: white; padding: 0.5rem; border-radius: 4px 0 0 4px; text-align: center;">Q1<br>Keuangan</div>
                            <div style="flex: 1; background: #3b82f6; color: white; padding: 0.5rem; text-align: center;">Q2<br>HC</div>
                            <div style="flex: 1; background: #f59e0b; color: white; padding: 0.5rem; text-align: center;">Q3<br>Teknik</div>
                            <div style="flex: 1; background: #8b5cf6; color: white; padding: 0.5rem; border-radius: 0 4px 4px 0; text-align: center;">Q4<br>PRSU</div>
                        </div>
                    </div>
                </div>

                <!-- Sampling Transaksi -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);">
                        <span class="mockup-title">🎲 Sampling Transaksi</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #0d9488;">+ Generate Sample</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Sampling Config -->
                        <div style="background: #f0fdfa; border: 1px solid #14b8a6; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="font-weight: 600; margin-bottom: 0.75rem;">⚙️ Konfigurasi Sampling</div>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; font-size: 0.85rem;">
                                <div>
                                    <div style="color: #64748b; font-size: 0.75rem;">Populasi</div>
                                    <div style="font-weight: 600;">Pembayaran Jan 2026</div>
                                </div>
                                <div>
                                    <div style="color: #64748b; font-size: 0.75rem;">Total Transaksi</div>
                                    <div style="font-weight: 600;">1,245 transaksi</div>
                                </div>
                                <div>
                                    <div style="color: #64748b; font-size: 0.75rem;">Total Nilai</div>
                                    <div style="font-weight: 600;">Rp 12.5 M</div>
                                </div>
                                <div>
                                    <div style="color: #64748b; font-size: 0.75rem;">Metode</div>
                                    <div style="font-weight: 600;">Random + High Value</div>
                                </div>
                                <div>
                                    <div style="color: #64748b; font-size: 0.75rem;">Confidence Level</div>
                                    <div style="font-weight: 600;">95%</div>
                                </div>
                                <div>
                                    <div style="color: #64748b; font-size: 0.75rem;">Sample Size</div>
                                    <div style="font-weight: 600;">85 transaksi</div>
                                </div>
                            </div>
                        </div>

                        <!-- Sample List -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📝 Sample List - Audit Pembayaran</div>
                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Voucher</th>
                                    <th>Vendor</th>
                                    <th>Nilai</th>
                                    <th>Kategori</th>
                                    <th>Status Testing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #dcfce7;">
                                    <td>1</td>
                                    <td style="font-family: monospace;">VCR-2026-0145</td>
                                    <td>PT Jaya Konstruksi</td>
                                    <td>Rp 245.000.000</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">High Value</span></td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">✅ Tested OK</span></td>
                                </tr>
                                <tr style="background: #fef2f2;">
                                    <td>2</td>
                                    <td style="font-family: monospace;">VCR-2026-0123</td>
                                    <td>CV Maju Bersama</td>
                                    <td>Rp 78.500.000</td>
                                    <td><span style="background: #3b82f6; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">Random</span></td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">❌ Exception</span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td style="font-family: monospace;">VCR-2026-0098</td>
                                    <td>PT Supplier ABC</td>
                                    <td>Rp 25.000.000</td>
                                    <td><span style="background: #3b82f6; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">Random</span></td>
                                    <td><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">🔄 Testing</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Red Flag Dashboard -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);">
                        <span class="mockup-title">🚩 Red Flag Otomatis</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Red Flag Categories -->
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #fef2f2; border: 2px solid #ef4444; padding: 0.75rem; border-radius: 8px;">
                                <div style="font-weight: 600; color: #991b1b;">💰 Keuangan</div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #ef4444;">5</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Duplicate, Split, Unusual</div>
                            </div>
                            <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 0.75rem; border-radius: 8px;">
                                <div style="font-weight: 600; color: #92400e;">👥 HC</div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #f59e0b;">2</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Ghost, Overtime anomaly</div>
                            </div>
                            <div style="background: #dbeafe; border: 2px solid #3b82f6; padding: 0.75rem; border-radius: 8px;">
                                <div style="font-weight: 600; color: #1d4ed8;">🏗️ Proyek</div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #3b82f6;">3</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Overrun, Delay, Change Order</div>
                            </div>
                        </div>

                        <!-- Recent Red Flags -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">🚨 Red Flag Terbaru</div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <div style="background: #fef2f2; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 500;">🚩 Split Purchase Order - hindari limit Rp 50jt</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">3 PO ke vendor sama, tanggal berurutan | 19 Jan 2026</div>
                                </div>
                                <button style="background: #ef4444; color: white; border: none; padding: 0.375rem 0.75rem; border-radius: 4px; font-size: 0.75rem; cursor: pointer;">Investigate</button>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 500;">🚩 Unusual Overtime Pattern - 1 karyawan 50 jam/minggu</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">NIK: EMP-2024-0078 | Week 3 Jan 2026</div>
                                </div>
                                <button style="background: #f59e0b; color: white; border: none; padding: 0.375rem 0.75rem; border-radius: 4px; font-size: 0.75rem; cursor: pointer;">Review</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tindak Lanjut Monitoring -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <span class="mockup-title">📊 Monitoring Tindak Lanjut Temuan</span>
                    </div>
                    <div class="mockup-content">
                        <!-- TL Summary -->
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; margin-bottom: 1rem; font-size: 0.8rem;">
                            <div style="background: #ef4444; color: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700;">5</div>
                                <div>Belum TL</div>
                            </div>
                            <div style="background: #f59e0b; color: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700;">8</div>
                                <div>Proses TL</div>
                            </div>
                            <div style="background: #3b82f6; color: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700;">3</div>
                                <div>Pending Verify</div>
                            </div>
                            <div style="background: #22c55e; color: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700;">28</div>
                                <div>Selesai</div>
                            </div>
                            <div style="background: #64748b; color: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700;">2</div>
                                <div>Overdue</div>
                            </div>
                        </div>

                        <!-- TL Progress per Unit -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📊 Progress TL per Unit</div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                                    <span style="font-weight: 500;">Divisi Keuangan</span>
                                    <span>8/10 selesai (80%)</span>
                                </div>
                                <div style="background: #e2e8f0; border-radius: 4px; height: 8px;">
                                    <div style="width: 80%; background: #22c55e; height: 100%; border-radius: 4px;"></div>
                                </div>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                                    <span style="font-weight: 500;">Divisi Teknik</span>
                                    <span style="color: #f59e0b;">3/8 selesai (37%) ⚠️</span>
                                </div>
                                <div style="background: #e2e8f0; border-radius: 4px; height: 8px;">
                                    <div style="width: 37%; background: #f59e0b; height: 100%; border-radius: 4px;"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Aging Temuan -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">⏳ Aging Temuan Belum TL</div>
                        <div style="display: flex; gap: 0.5rem; font-size: 0.8rem;">
                            <div style="flex: 1; background: #dcfce7; padding: 0.5rem; border-radius: 6px; text-align: center;">
                                <div style="font-weight: 600; color: #166534;">2</div>
                                <div style="font-size: 0.7rem;">&lt; 30 hari</div>
                            </div>
                            <div style="flex: 1; background: #fef3c7; padding: 0.5rem; border-radius: 6px; text-align: center;">
                                <div style="font-weight: 600; color: #92400e;">1</div>
                                <div style="font-size: 0.7rem;">30-60 hari</div>
                            </div>
                            <div style="flex: 1; background: #fed7aa; padding: 0.5rem; border-radius: 6px; text-align: center;">
                                <div style="font-weight: 600; color: #c2410c;">1</div>
                                <div style="font-size: 0.7rem;">60-90 hari</div>
                            </div>
                            <div style="flex: 1; background: #fecaca; padding: 0.5rem; border-radius: 6px; text-align: center;">
                                <div style="font-weight: 600; color: #991b1b;">1</div>
                                <div style="font-size: 0.7rem;">&gt; 90 hari</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Arsip Digital -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);">
                        <span class="mockup-title">📁 Arsip Digital Audit</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #4f46e5;">+ Upload</button>
                            <button class="mockup-btn" style="background: white; color: #4f46e5;">📥 Export</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Search -->
                        <div style="display: flex; gap: 0.75rem; margin-bottom: 1rem;">
                            <input type="text" placeholder="🔍 Cari dokumen audit..." style="flex: 1; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.85rem;">
                            <select style="padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.85rem;">
                                <option>Semua Jenis</option>
                                <option>📝 Kertas Kerja</option>
                                <option>📷 Evidence</option>
                                <option>📄 LHA</option>
                            </select>
                        </div>

                        <!-- Document List -->
                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>Audit ID</th>
                                    <th>Nama Dokumen</th>
                                    <th>Jenis</th>
                                    <th>Tanggal</th>
                                    <th>Uploader</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-family: monospace;">AUD-2026-001</td>
                                    <td>📄 LHA_Keuangan_Q1_2026.pdf</td>
                                    <td>LHA</td>
                                    <td>18 Jan 2026</td>
                                    <td>Auditor Senior</td>
                                    <td>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">👁️ View</button>
                                        <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">⬇️</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">AUD-2026-001</td>
                                    <td>📝 KKA_Testing_Pembayaran.xlsx</td>
                                    <td>Kertas Kerja</td>
                                    <td>15 Jan 2026</td>
                                    <td>Auditor Junior</td>
                                    <td>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">👁️ View</button>
                                        <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">⬇️</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">AUD-2026-001</td>
                                    <td>📷 Evidence_VCR-0123.png</td>
                                    <td>Evidence</td>
                                    <td>14 Jan 2026</td>
                                    <td>Auditor Junior</td>
                                    <td>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">👁️ View</button>
                                        <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">⬇️</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Archive Stats -->
                        <div style="display: flex; gap: 1rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; font-size: 0.8rem;">
                            <div><strong>Total:</strong> 156 dokumen</div>
                            <div>📄 LHA: 12</div>
                            <div>📝 Kertas Kerja: 89</div>
                            <div>📷 Evidence: 55</div>
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
