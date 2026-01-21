// ============================================
// MODUL 9 - SISTEM MANAJEMEN RISIKO
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_risiko = {
    id: 'modul_risiko',
    title: 'Modul 9 - Sistem Manajemen Risiko',
    subtitle: 'Risk Register, Heat Map, KRI Monitoring & Early Warning System',
    icon: '⚠️',
    menuTitle: 'Manajemen Risiko',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem Manajemen Risiko',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Membangun sistem manajemen risiko terintegrasi dengan risk register digital, 
                         penilaian risiko terstandar (likelihood × impact), heat map visualisasi,
                         monitoring KRI, dan early warning system yang terintegrasi semua modul.`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Identifikasi:</strong> Ad-hoc, tidak terstruktur<br>
                         <strong>2. Risk Register:</strong> Tidak ada/Excel terpisah<br>
                         <strong>3. Assessment:</strong> Tidak konsisten, subjektif<br>
                         <strong>4. Mitigasi:</strong> Reaktif, terlambat<br>
                         <strong>5. Monitoring:</strong> Manual, tidak real-time`
            },
            {
                icon: '📊',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Risk Assessment Matrix (5×5)',
                content: `<strong>Likelihood (1-5):</strong> Rare → Almost Certain<br>
                         <strong>Impact (1-5):</strong> Insignificant → Catastrophic<br>
                         <strong>Risk Score:</strong> L × I (1-25)<br>
                         🟢 1-4: Low | 🟡 5-9: Medium | 🟠 10-15: High | 🔴 16-25: Extreme`
            },
            {
                icon: '🛡️',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Strategi Mitigasi (4T)',
                content: `🚫 <strong>Terminate:</strong> Hindari aktivitas berisiko<br>
                         📉 <strong>Treat:</strong> Kurangi likelihood/impact<br>
                         🔄 <strong>Transfer:</strong> Asuransi, outsourcing<br>
                         ✅ <strong>Tolerate:</strong> Terima dengan monitoring`
            },
            {
                icon: '📈',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Key Risk Indicators (KRI)',
                content: `<strong>AR Aging:</strong> 🟢 <5% | 🟡 5-10% | 🔴 >10%<br>
                         <strong>Project SPI:</strong> 🟢 >0.95 | 🟡 0.8-0.95 | 🔴 <0.8<br>
                         <strong>Turnover:</strong> 🟢 <5% | 🟡 5-10% | 🔴 >10%<br>
                         <strong>Alert otomatis</strong> jika KRI breach threshold`
            },
            {
                icon: '🔗',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Integrasi Semua Modul',
                content: `<strong>Keuangan:</strong> → Risiko Likuiditas<br>
                         <strong>Transportasi:</strong> → Risiko Keselamatan<br>
                         <strong>Teknik:</strong> → Risiko Proyek<br>
                         <strong>PRSU:</strong> → Risiko Pendapatan<br>
                         <strong>HR:</strong> → Risiko SDM`
            },
            {
                icon: '📝',
                iconBg: 'rgba(168, 85, 247, 0.1)',
                iconColor: '#a855f7',
                title: 'Hybrid Input System',
                content: `<strong>✍️ Manual:</strong> Form input Risk Register (user)<br>
                         <strong>🤖 Otomatis:</strong> KRI sync dari semua modul<br>
                         <strong>⚡ Auto-Generate:</strong> Create risk jika KRI breach<br>
                         <strong>🔗 Drill-down:</strong> Link ke modul asal per KRI<br>
                         <strong>🔄 Sync:</strong> Real-time / 15 menit`
            },
            {
                icon: '📁',
                iconBg: 'rgba(14, 165, 233, 0.1)',
                iconColor: '#0ea5e9',
                title: 'Arsip Digital Risiko',
                content: `<strong>📄 Dokumen:</strong> Upload dokumen pendukung<br>
                         <strong>📷 Bukti:</strong> Foto, screenshot, evidence<br>
                         <strong>📅 Histori:</strong> Timeline perubahan status<br>
                         <strong>🔍 Pencarian:</strong> Filter & search cepat<br>
                         <strong>📥 Export:</strong> PDF report, Excel`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Manajemen Risiko',
        mermaid: `flowchart LR

%% ===================== RISK REGISTER =====================
subgraph REGISTER["📋 RISK REGISTER"]
    direction TB
    R1[Input<br>Risiko] --> R2[Kategorisasi<br>Risiko]
    R2 --> R3[Assign<br>Risk Owner]
    R3 --> R4[📋 Risk<br>Register]
end

%% ===================== RISK ASSESSMENT =====================
subgraph ASSESS["📊 RISK ASSESSMENT"]
    direction TB
    A1[Nilai<br>Likelihood] --> A3[Calculate<br>L × I]
    A2[Nilai<br>Impact] --> A3
    A3 --> A4[Inherent<br>Risk Score]
    A4 --> A5{Risk Level?}

    A5 -->|1–4| A6[🟢 Low]
    A5 -->|5–9| A7[🟡 Medium]
    A5 -->|10–15| A8[🟠 High]
    A5 -->|16–25| A9[🔴 Extreme]

    A8 --> A10[Plan<br>Mitigasi]
    A9 --> A10
    A10 --> A11[Residual<br>Risk Score]
end

%% ===================== RISK RESPONSE =====================
subgraph RESPOND["🛡️ PENANGANAN (4T)"]
    direction TB
    T1{Strategi?}
    T1 -->|Terminate| T2[🚫 Hindari<br>Aktivitas]
    T1 -->|Treat| T3[📉 Kurangi<br>L atau I]
    T1 -->|Transfer| T4[🔄 Asuransi<br>/ Outsource]
    T1 -->|Tolerate| T5[✅ Terima<br>& Monitor]
end

%% ===================== MONITORING =====================
subgraph MONITOR["📈 MONITORING PENGELOLAAN"]
    direction TB
    M1[🔄 Progress<br>Mitigasi] --> M2{Status?}
    M2 -->|Selesai| M3[✅ Closed]
    M2 -->|Ongoing| M4[🟡 Track<br>Progress]
    M2 -->|Overdue| M5[⚠️ Escalate]
    M5 --> M4

    M4 --> M6[KRI<br>Monitoring]
    M6 --> M7{Breach<br>Threshold?}
    M7 -->|Ya| M8[🔔 Alert]
    M7 -->|Tidak| M9[Continue]
end

%% ===================== ARSIP DIGITAL =====================
subgraph ARSIP["📁 ARSIP DIGITAL"]
    direction TB
    D1[📄 Dokumen] --> D4[Repository<br>Terpusat]
    D2[📷 Evidence] --> D4
    D3[📝 Laporan] --> D4
    D4 --> D5[🔍 Search<br>& Filter]
    D4 --> D6[📥 Export]
end

%% ===================== RELASI ANTAR MODUL =====================
R4 --> A1
R4 --> A2
A11 --> T1
T3 --> M1
T5 --> M6
M3 --> D3
A4 --> D1

%% ===================== STYLING =====================
style REGISTER fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style ASSESS fill:#dcfce7,stroke:#22c55e,color:#166534
style RESPOND fill:#f3e8ff,stroke:#a855f7,color:#581c87
style MONITOR fill:#fef3c7,stroke:#f59e0b,color:#78350f
style ARSIP fill:#e0e7ff,stroke:#6366f1,color:#3730a3`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem Manajemen Risiko',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard Risiko -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);">
                        <span class="mockup-title">⚠️ Dashboard Manajemen Risiko</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Extreme Risk</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">2</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🔴 Immediate Action</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">High Risk</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">5</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟠 Mitigate</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #eab308, #ca8a04); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Medium Risk</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">12</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟡 Control</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Low Risk</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">18</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟢 Monitor</div>
                            </div>
                        </div>

                        <!-- Alert Banner -->
                        <div style="background: #fef2f2; border: 1px solid #ef4444; padding: 0.75rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem; animation: pulse 2s infinite;">
                            <span style="font-size: 1.25rem;">🚨</span>
                            <div style="font-size: 0.85rem;">
                                <strong>ALERT:</strong> KRI "AR Aging > 90 hari" breach threshold 🔴 (Actual: 12%, Threshold: 10%)
                            </div>
                        </div>
                        <style>
                            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
                        </style>
                    </div>
                </div>

                <!-- Heat Map -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                        <span class="mockup-title">🗺️ Risk Heat Map (Likelihood × Impact)</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: 40px repeat(5, 1fr); gap: 4px; font-size: 0.75rem;">
                            <!-- Y-Axis Label -->
                            <div></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">1<br><span style="font-size: 0.6rem;">Rare</span></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">2<br><span style="font-size: 0.6rem;">Unlikely</span></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">3<br><span style="font-size: 0.6rem;">Possible</span></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">4<br><span style="font-size: 0.6rem;">Likely</span></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">5<br><span style="font-size: 0.6rem;">Certain</span></div>
                            
                            <!-- Row 5 (Catastrophic) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">5</div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">5</div>
                            <div style="background: #fed7aa; padding: 1rem; border-radius: 4px; text-align: center;">10</div>
                            <div style="background: #fca5a5; padding: 1rem; border-radius: 4px; text-align: center;">15<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●2</span></div>
                            <div style="background: #ef4444; color: white; padding: 1rem; border-radius: 4px; text-align: center;">20<br><span style="font-size: 0.6rem; background: rgba(255,255,255,0.3); padding: 0 4px; border-radius: 2px;">●1</span></div>
                            <div style="background: #dc2626; color: white; padding: 1rem; border-radius: 4px; text-align: center;">25<br><span style="font-size: 0.6rem; background: rgba(255,255,255,0.3); padding: 0 4px; border-radius: 2px;">●1</span></div>
                            
                            <!-- Row 4 (Major) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">4</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">4</div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">8<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●3</span></div>
                            <div style="background: #fed7aa; padding: 1rem; border-radius: 4px; text-align: center;">12<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●2</span></div>
                            <div style="background: #fca5a5; padding: 1rem; border-radius: 4px; text-align: center;">16</div>
                            <div style="background: #ef4444; color: white; padding: 1rem; border-radius: 4px; text-align: center;">20</div>
                            
                            <!-- Row 3 (Moderate) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">3</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">3<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●4</span></div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">6<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●5</span></div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">9<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●4</span></div>
                            <div style="background: #fed7aa; padding: 1rem; border-radius: 4px; text-align: center;">12<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●1</span></div>
                            <div style="background: #fca5a5; padding: 1rem; border-radius: 4px; text-align: center;">15</div>
                            
                            <!-- Row 2 (Minor) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">2</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">2<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●6</span></div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">4<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●5</span></div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">6</div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">8</div>
                            <div style="background: #fed7aa; padding: 1rem; border-radius: 4px; text-align: center;">10</div>
                            
                            <!-- Row 1 (Insignificant) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">1</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">1<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●3</span></div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">2</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">3</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">4</div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">5</div>
                        </div>

                        <!-- Legend -->
                        <div style="display: flex; gap: 1.5rem; margin-top: 1rem; justify-content: center; font-size: 0.75rem;">
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #22c55e; border-radius: 4px;"></div>
                                <span>Low (1-4)</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #eab308; border-radius: 4px;"></div>
                                <span>Medium (5-9)</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #f97316; border-radius: 4px;"></div>
                                <span>High (10-15)</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #ef4444; border-radius: 4px;"></div>
                                <span>Extreme (16-25)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- KRI Monitoring -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                        <span class="mockup-title">📈 KRI Monitoring Dashboard</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                            <!-- KRI Card 1 -->
                            <div style="background: #fef2f2; border: 2px solid #ef4444; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">AR Aging > 90 hari</span>
                                    <span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 BREACH</span>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #ef4444;">12%</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Threshold: <span style="color: #22c55e;">< 5%</span> | <span style="color: #eab308;">5-10%</span> | <span style="color: #ef4444;">> 10%</span></div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid #fecaca;">
                                    <span style="font-size: 0.7rem; color: #94a3b8;">🔄 dari: Modul Keuangan</span>
                                    <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">🔗 Drill-down</button>
                                </div>
                            </div>
                            
                            <!-- KRI Card 2 -->
                            <div style="background: #fefce8; border: 2px solid #eab308; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">Project SPI Average</span>
                                    <span style="background: #eab308; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟡 WARNING</span>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #eab308;">0.92</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Threshold: <span style="color: #22c55e;">> 0.95</span> | <span style="color: #eab308;">0.8-0.95</span> | <span style="color: #ef4444;">< 0.8</span></div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid #fde68a;">
                                    <span style="font-size: 0.7rem; color: #94a3b8;">🔄 dari: Modul Teknik</span>
                                    <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">🔗 Drill-down</button>
                                </div>
                            </div>
                            
                            <!-- KRI Card 3 -->
                            <div style="background: #dcfce7; border: 2px solid #22c55e; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">Employee Turnover</span>
                                    <span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟢 NORMAL</span>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #22c55e;">3.2%</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Threshold: <span style="color: #22c55e;">< 5%</span> | <span style="color: #eab308;">5-10%</span> | <span style="color: #ef4444;">> 10%</span></div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid #86efac;">
                                    <span style="font-size: 0.7rem; color: #94a3b8;">🔄 dari: Modul HC</span>
                                    <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">🔗 Drill-down</button>
                                </div>
                            </div>
                            
                            <!-- KRI Card 4 -->
                            <div style="background: #dcfce7; border: 2px solid #22c55e; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">PRSU Occupancy Rate</span>
                                    <span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟢 NORMAL</span>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #22c55e;">68%</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Threshold: <span style="color: #22c55e;">> 60%</span> | <span style="color: #eab308;">40-60%</span> | <span style="color: #ef4444;">< 40%</span></div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid #86efac;">
                                    <span style="font-size: 0.7rem; color: #94a3b8;">🔄 dari: Modul PRSU</span>
                                    <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">🔗 Drill-down</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Input Risk -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);">
                        <span class="mockup-title">✍️ Form Input Risiko Baru</span>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Manual Input</span>
                    </div>
                    <div class="mockup-content">
                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Nama Risiko *</label>
                                <input type="text" class="mockup-input" placeholder="Contoh: Gagal bayar piutang proyek">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Kategori *</label>
                                <select class="mockup-select">
                                    <option>💰 Keuangan</option>
                                    <option>⚙️ Operasional</option>
                                    <option>📊 Strategis</option>
                                    <option>✅ Kepatuhan</option>
                                    <option>💻 Teknologi</option>
                                </select>
                            </div>
                        </div>

                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Unit Bisnis *</label>
                                <select class="mockup-select">
                                    <option>Divisi Keuangan</option>
                                    <option>Divisi Transportasi</option>
                                    <option>Divisi PRSU</option>
                                    <option>Divisi Teknik</option>
                                    <option>Divisi HC</option>
                                </select>
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Risk Owner *</label>
                                <select class="mockup-select">
                                    <option>Manajer Keuangan</option>
                                    <option>Manajer Transportasi</option>
                                    <option>Manajer PRSU</option>
                                    <option>Manajer Teknik</option>
                                </select>
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Deskripsi Risiko *</label>
                            <textarea class="mockup-input" rows="2" placeholder="Jelaskan risiko secara detail..."></textarea>
                        </div>

                        <!-- Assessment L x I -->
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="font-weight: 600; margin-bottom: 0.75rem;">📊 Assessment (Likelihood × Impact)</div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr 120px; gap: 1rem; align-items: center;">
                                <div>
                                    <label style="font-size: 0.75rem; color: #64748b;">Likelihood (1-5)</label>
                                    <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem;">
                                        <button style="width: 32px; height: 32px; border: 2px solid #e2e8f0; border-radius: 6px; background: white; cursor: pointer;">1</button>
                                        <button style="width: 32px; height: 32px; border: 2px solid #e2e8f0; border-radius: 6px; background: white; cursor: pointer;">2</button>
                                        <button style="width: 32px; height: 32px; border: 2px solid #e2e8f0; border-radius: 6px; background: white; cursor: pointer;">3</button>
                                        <button style="width: 32px; height: 32px; border: 2px solid #3b82f6; border-radius: 6px; background: #dbeafe; cursor: pointer; font-weight: 600;">4</button>
                                        <button style="width: 32px; height: 32px; border: 2px solid #e2e8f0; border-radius: 6px; background: white; cursor: pointer;">5</button>
                                    </div>
                                </div>
                                <div>
                                    <label style="font-size: 0.75rem; color: #64748b;">Impact (1-5)</label>
                                    <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem;">
                                        <button style="width: 32px; height: 32px; border: 2px solid #e2e8f0; border-radius: 6px; background: white; cursor: pointer;">1</button>
                                        <button style="width: 32px; height: 32px; border: 2px solid #e2e8f0; border-radius: 6px; background: white; cursor: pointer;">2</button>
                                        <button style="width: 32px; height: 32px; border: 2px solid #e2e8f0; border-radius: 6px; background: white; cursor: pointer;">3</button>
                                        <button style="width: 32px; height: 32px; border: 2px solid #e2e8f0; border-radius: 6px; background: white; cursor: pointer;">4</button>
                                        <button style="width: 32px; height: 32px; border: 2px solid #3b82f6; border-radius: 6px; background: #dbeafe; cursor: pointer; font-weight: 600;">5</button>
                                    </div>
                                </div>
                                <div style="text-align: center;">
                                    <label style="font-size: 0.75rem; color: #64748b;">Risk Score</label>
                                    <div style="background: #ef4444; color: white; padding: 0.5rem; border-radius: 8px; font-size: 1.25rem; font-weight: 700; margin-top: 0.25rem;">
                                        20 <span style="font-size: 0.65rem;">🔴 Extreme</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mitigasi -->
                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Strategi Mitigasi</label>
                                <select class="mockup-select">
                                    <option>📉 Treat (Kurangi)</option>
                                    <option>🔄 Transfer (Asuransi)</option>
                                    <option>🚫 Terminate (Hindari)</option>
                                    <option>✅ Tolerate (Terima)</option>
                                </select>
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Deadline Mitigasi</label>
                                <input type="date" class="mockup-input" value="2026-02-28">
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Rencana Mitigasi</label>
                            <textarea class="mockup-input" rows="2" placeholder="Jelaskan rencana aksi mitigasi..."></textarea>
                        </div>

                        <button class="mockup-submit" style="width: 100%;">💾 Simpan Risiko</button>
                    </div>
                </div>

                <!-- Risk Register -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">🗂️ Risk Register</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">+ Tambah Risiko</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Risk ID</th>
                                    <th>Risiko</th>
                                    <th>Kategori</th>
                                    <th>L</th>
                                    <th>I</th>
                                    <th>Score</th>
                                    <th>Level</th>
                                    <th>Mitigasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td style="font-family: monospace;">R-2026-001</td>
                                    <td>Gagal bayar piutang proyek</td>
                                    <td>💰 Keuangan</td>
                                    <td>5</td>
                                    <td>5</td>
                                    <td style="font-weight: 700;">25</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 Extreme</span></td>
                                    <td style="font-size: 0.75rem;">📉 Treat - Review policy</td>
                                </tr>
                                <tr style="background: #fef2f2;">
                                    <td style="font-family: monospace;">R-2026-003</td>
                                    <td>Overcapacity kapal ferry</td>
                                    <td>⚙️ Operasional</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td style="font-weight: 700;">20</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 Extreme</span></td>
                                    <td style="font-size: 0.75rem;">📉 Treat - Capacity system</td>
                                </tr>
                                <tr style="background: #fff7ed;">
                                    <td style="font-family: monospace;">R-2026-005</td>
                                    <td>Keterlambatan proyek infrastruktur</td>
                                    <td>⚙️ Operasional</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td style="font-weight: 700;">15</td>
                                    <td><span style="background: #f97316; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟠 High</span></td>
                                    <td style="font-size: 0.75rem;">📉 Treat - Progress monitor</td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">R-2026-008</td>
                                    <td>Kerusakan aset kendaraan</td>
                                    <td>⚙️ Operasional</td>
                                    <td>3</td>
                                    <td>2</td>
                                    <td style="font-weight: 700;">6</td>
                                    <td><span style="background: #eab308; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟡 Medium</span></td>
                                    <td style="font-size: 0.75rem;">🔄 Transfer - Asuransi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Risk Assessment Detail -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
                        <span class="mockup-title">📊 Risk Assessment Detail</span>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">R-2026-001</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Risk Info -->
                        <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <div>
                                    <div style="font-weight: 600; font-size: 1.1rem;">Gagal bayar piutang proyek</div>
                                    <div style="font-size: 0.85rem; color: #64748b;">Kategori: 💰 Keuangan | Risk Owner: Manajer Keuangan</div>
                                </div>
                                <span style="background: #ef4444; color: white; padding: 0.375rem 0.75rem; border-radius: 6px; font-weight: 600;">🔴 Extreme (25)</span>
                            </div>
                        </div>

                        <!-- Inherent vs Residual Risk -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📊 Inherent vs Residual Risk</div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div style="background: #fef2f2; border: 2px solid #ef4444; padding: 1rem; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: #64748b; margin-bottom: 0.5rem;">Inherent Risk (Sebelum Mitigasi)</div>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <div style="font-size: 0.75rem;">Likelihood: <strong>5</strong> (Almost Certain)</div>
                                        <div style="font-size: 0.75rem;">Impact: <strong>5</strong> (Catastrophic)</div>
                                    </div>
                                    <div style="background: #ef4444; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-size: 1.5rem; font-weight: 700;">25</div>
                                </div>
                            </div>
                            <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 1rem; border-radius: 8px;">
                                <div style="font-size: 0.8rem; color: #64748b; margin-bottom: 0.5rem;">Residual Risk (Setelah Mitigasi)</div>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <div style="font-size: 0.75rem;">Likelihood: <strong>3</strong> (Possible)</div>
                                        <div style="font-size: 0.75rem;">Impact: <strong>4</strong> (Major)</div>
                                    </div>
                                    <div style="background: #f59e0b; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-size: 1.5rem; font-weight: 700;">12</div>
                                </div>
                            </div>
                        </div>

                        <!-- Mitigasi Actions -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">🛡️ Rencana Mitigasi</div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 500;">Review credit policy & term pembayaran</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">PIC: Staff AR | Deadline: 31 Jan 2026</div>
                                </div>
                                <span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">✅ Done</span>
                            </div>
                            <div style="background: #dbeafe; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 500;">Implementasi sistem monitoring AR aging</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">PIC: IT & Keuangan | Deadline: 15 Feb 2026</div>
                                </div>
                                <span style="background: #3b82f6; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔄 In Progress</span>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 500;">Training collection team</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">PIC: HC & Keuangan | Deadline: 28 Feb 2026</div>
                                </div>
                                <span style="background: #94a3b8; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">⏳ Pending</span>
                            </div>
                        </div>

                        <!-- Timeline -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📅 Timeline Risiko</div>
                        <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; font-size: 0.8rem;">
                            <div style="display: flex; gap: 1rem; border-left: 3px solid #3b82f6; padding-left: 0.75rem;">
                                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    <div>
                                        <div style="color: #64748b;">15 Jan 2026</div>
                                        <div>Risiko teridentifikasi dari KRI breach</div>
                                    </div>
                                    <div>
                                        <div style="color: #64748b;">18 Jan 2026</div>
                                        <div>Risk assessment selesai, mitigasi disetujui</div>
                                    </div>
                                    <div>
                                        <div style="color: #64748b;">19 Jan 2026</div>
                                        <div>Mitigasi 1 selesai (policy review)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Risk Monitoring Dashboard -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">📊 Monitoring Pengelolaan Risiko</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Monitoring Summary -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #166534;">12</div>
                                <div style="font-size: 0.7rem; color: #166534;">Mitigasi Selesai</div>
                            </div>
                            <div style="background: #dbeafe; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #1d4ed8;">8</div>
                                <div style="font-size: 0.7rem; color: #1d4ed8;">Sedang Berjalan</div>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #92400e;">3</div>
                                <div style="font-size: 0.7rem; color: #92400e;">Overdue</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #64748b;">5</div>
                                <div style="font-size: 0.7rem; color: #64748b;">Belum Dimulai</div>
                            </div>
                        </div>

                        <!-- Risk Status by Category -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📊 Status per Kategori Risiko</div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 500;">💰 Keuangan</span>
                                    <span>4 risks | 2 mitigasi on track</span>
                                </div>
                                <div style="background: #e2e8f0; border-radius: 4px; height: 8px;">
                                    <div style="width: 65%; background: linear-gradient(90deg, #22c55e 60%, #3b82f6 60%, #3b82f6 80%, #f59e0b 80%); height: 100%; border-radius: 4px;"></div>
                                </div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 500;">⚙️ Operasional</span>
                                    <span>6 risks | 4 mitigasi on track</span>
                                </div>
                                <div style="background: #e2e8f0; border-radius: 4px; height: 8px;">
                                    <div style="width: 75%; background: linear-gradient(90deg, #22c55e 70%, #3b82f6 70%); height: 100%; border-radius: 4px;"></div>
                                </div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 500;">📊 Strategis</span>
                                    <span>3 risks | 2 mitigasi on track</span>
                                </div>
                                <div style="background: #e2e8f0; border-radius: 4px; height: 8px;">
                                    <div style="width: 80%; background: #22c55e; height: 100%; border-radius: 4px;"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Overdue Mitigation Alerts -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">⚠️ Mitigasi Overdue</div>
                        <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 8px;">
                            <table class="mockup-table" style="font-size: 0.8rem;">
                                <thead>
                                    <tr>
                                        <th>Risiko</th>
                                        <th>Aksi Mitigasi</th>
                                        <th>PIC</th>
                                        <th>Deadline</th>
                                        <th>Overdue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>R-2026-003</td>
                                        <td>Install capacity counter</td>
                                        <td>IT</td>
                                        <td>10 Jan 2026</td>
                                        <td style="color: #ef4444; font-weight: 600;">9 hari</td>
                                    </tr>
                                    <tr>
                                        <td>R-2026-005</td>
                                        <td>Update project timeline</td>
                                        <td>PM Teknik</td>
                                        <td>15 Jan 2026</td>
                                        <td style="color: #ef4444; font-weight: 600;">4 hari</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Digital Archive -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);">
                        <span class="mockup-title">📁 Arsip Digital Risiko</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #0284c7;">+ Upload</button>
                            <button class="mockup-btn" style="background: white; color: #0284c7;">📥 Export</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Search & Filter -->
                        <div style="display: flex; gap: 0.75rem; margin-bottom: 1rem;">
                            <input type="text" placeholder="🔍 Cari dokumen..." style="flex: 1; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.85rem;">
                            <select style="padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.85rem;">
                                <option>Semua Kategori</option>
                                <option>💰 Keuangan</option>
                                <option>⚙️ Operasional</option>
                            </select>
                            <select style="padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.85rem;">
                                <option>Semua Jenis</option>
                                <option>📄 Dokumen</option>
                                <option>📷 Foto/Evidence</option>
                                <option>📊 Laporan</option>
                            </select>
                        </div>

                        <!-- Document List -->
                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>Risk ID</th>
                                    <th>Nama Dokumen</th>
                                    <th>Jenis</th>
                                    <th>Tanggal Upload</th>
                                    <th>Uploader</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-family: monospace;">R-2026-001</td>
                                    <td>📄 Policy_Credit_Review_v2.pdf</td>
                                    <td>Dokumen</td>
                                    <td>19 Jan 2026</td>
                                    <td>Staff Keuangan</td>
                                    <td>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">👁️ View</button>
                                        <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">⬇️</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">R-2026-001</td>
                                    <td>📷 Screenshot_AR_Report.png</td>
                                    <td>Evidence</td>
                                    <td>18 Jan 2026</td>
                                    <td>Manajer Keuangan</td>
                                    <td>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">👁️ View</button>
                                        <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">⬇️</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">R-2026-003</td>
                                    <td>📊 Laporan_Kapasitas_Ferry.xlsx</td>
                                    <td>Laporan</td>
                                    <td>15 Jan 2026</td>
                                    <td>Manajer Transportasi</td>
                                    <td>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">👁️ View</button>
                                        <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">⬇️</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">R-2026-005</td>
                                    <td>📄 Risk_Assessment_Form.pdf</td>
                                    <td>Dokumen</td>
                                    <td>12 Jan 2026</td>
                                    <td>Risk Officer</td>
                                    <td>
                                        <button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">👁️ View</button>
                                        <button style="background: #22c55e; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.65rem; cursor: pointer;">⬇️</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Archive Stats -->
                        <div style="display: flex; gap: 1rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
                            <div style="font-size: 0.8rem;"><strong>Total:</strong> 47 dokumen</div>
                            <div style="font-size: 0.8rem;">📄 Dokumen: 28</div>
                            <div style="font-size: 0.8rem;">📷 Evidence: 12</div>
                            <div style="font-size: 0.8rem;">📊 Laporan: 7</div>
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
window.ppsuModules.push(modul_risiko);
