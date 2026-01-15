import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  const content = {
    en: {
      headerTitle: "Joe's Barber Shop",
      headerSubtitle: "Digital Transformation Proposal",
      date: "Prepared for 6117 Reseda Blvd • Dec 2025",
      toggleLabel: "Español",
      
      summaryTitle: "Executive Summary",
      letterHeadline: "Joe, let's talk about the next 10 years.",
      letterP1: "You don't stay in business for <strong>30 years</strong> in Tarzana by accident. That <strong>4.7-star rating</strong> across 90+ reviews proves one thing: You know how to take care of people. You’ve built a landmark since 1994.",
      letterP2: "But looking at your operation today, I see friction. The phone ringing while you're fading a client. Walk-ins leaving because they don't know the wait time. The 'Who's next?' confusion in the lobby. You are running a 2025 business with 1995 tools.",
      letterP3: "I am proposing a comprehensive upgrade. Not just a website, but a <strong>Digital Shop Manager</strong>. A booking engine, a TV display for the queue, a self-service kiosk, and a Voice AI receptionist. The goal is simple: <strong>You focus on the cuts. The system handles the rest.</strong>",
      signatureTitle: "Digital Strategy Consultant (20+ Years Exp.)",

      stats: [
        { num: "40%", label: "Proj. Booking Increase" },
        { num: "<15%", label: "Target No-Show Rate" },
        { num: "100%", label: "Paperless Workflow" }
      ],

      deliverables: {
        title: "Deliverables",
        headline: "The 7-Point Ecosystem",
        sub: "We aren't just building a webpage. We are installing a digital operating system.",
        items: [
          {
            icon: "fa-laptop-code",
            title: "1. The Hub (Website)",
            desc: "Mobile-first design that honors the classic Joe's aesthetic. Features your 30-year history, team gallery, and immediate 'Book Now' access."
          },
          {
            icon: "fa-calendar-check",
            title: "2. Booking Engine",
            desc: "24/7 scheduling. Deposits to secure slots. Automated SMS reminders that cut no-shows by 40%. It works while you sleep."
          },
          {
            icon: "fa-tv",
            title: "3. Digital Lobby Display",
            desc: "A Chromecast-powered display for your shop TV. Shows 'Now Serving', 'Up Next', and Wait Times. Eliminates the 'Who's next?' question."
          },
          {
            icon: "fa-tablet-alt",
            title: "4. Self-Service Kiosk",
            desc: "A simple tablet station for walk-ins. Customers check themselves in without interrupting a cut. Captures those without smartphones."
          },
          {
            icon: "fa-microphone-alt",
            title: "5. Voice AI Receptionist",
            desc: "A Voice AI that answers your shop phone 24/7. It sounds human, handles bookings, answers questions about hours/parking, and filters spam. You never have to pick up the phone again."
          },
          {
            icon: "fa-map-marked-alt",
            title: "6. Local SEO Dominance",
            desc: "Optimizing for 'Barber near Tarzana'. Photo curation, NAP consistency, and direct booking links on Google Maps."
          }
        ]
      },

      journey: {
        title: "The Experience",
        headline: "A Customer Walkthrough",
        sub: "Here is how the new system feels for your client, 'Mike'.",
        steps: [
          { title: "1. Discovery", desc: "Mike searches 'Barber Tarzana'. He sees Joe's optimized Google profile with great photos and clicks 'Book Online'. No phone call needed." },
          { title: "2. Booking", desc: "He selects 'Skin Fade' with 'Barber Tony'. He picks Tuesday at 10:00 AM. He gets an instant SMS confirmation." },
          { title: "3. The Reminder", desc: "Monday evening, Mike gets a text: <em>'See you tomorrow at 10 AM at Joe's! Reply C to confirm.'</em> He confirms. No-show avoided." },
          { title: "4. The Arrival", desc: "Mike walks in. He sees his name on the <strong>TV Screen</strong> under 'Up Next'. He feels recognized and sits down to relax." },
          { title: "5. Retention", desc: "After the cut, he gets an automated text: <em>'Thanks for coming in, Mike! Leave us a review?'</em> He clicks 5 stars." }
        ]
      },

      roi: {
        title: "The ROI Calculation",
        desc: "The system costs $200/month. Here is how quickly it pays for itself.",
        table: [
          { k: "Monthly Cost", v: "$200", highlight: "red" },
          { k: "Avg. Haircut Price", v: "$35" },
          { k: "Cuts needed to Break Even", v: "~6 Cuts", highlight: "green" }
        ],
        note: "If this system saves you just <strong>1.5 no-shows per week</strong>, it is effectively free. Anything beyond that is pure profit."
      },

      automations: {
        title: "Automations We Will Build",
        items: [
          { icon: "fa-magic", title: "The 'No-Show Killer'", desc: "SMS reminders 24h and 2h before appointment." },
          { icon: "fa-star", title: "The Reputation Builder", desc: "Auto-text asking for a Google Review 1 hour after service." },
          { icon: "fa-birthday-cake", title: "The Loyalty Loop", desc: "Birthday discounts sent automatically to past clients." },
          { icon: "fa-undo", title: "The 'Come Back'", desc: "If a client hasn't booked in 5 weeks, nudge them." }
        ]
      },

      design: {
        title: "Visual Direction",
        headline: "Design Inspiration",
        sub: "We model success. Choose the vibe that fits Joe's best.",
        classic: "The 'Classic' Model",
        classicDesc: "Timeless, Gold & Cream. Heritage Feel.",
        modern: "The 'Modern' Model",
        modernDesc: "Bold, Dark, High Contrast. Sharp."
      },

      roadmap: {
        title: "Execution Plan",
        headline: "90-Day Roadmap",
        headers: ["Phase", "Focus", "Outcome"],
        rows: [
          { col1: "Month 1: Launch", col2: "Build Web, Set Kiosk, Install TV", col3: "Full system live. Staff trained. Walk-ins using Kiosk." },
          { col1: "Month 2: Optimize", col2: "AI Voice Tuning & SEO", col3: "Ranking for 'Tarzana Barber'. AI handling 80% of calls." },
          { col1: "Month 3: Growth", col2: "Review Generation & Marketing", col3: "Hit 150+ Reviews. Email marketing to client base." }
        ]
      },

      pricing: {
        title: "Investment",
        headline: "Simple Pricing Structure",
        sub: "Transparent. No hidden fees. Cancel anytime after term.",
        setup: "One-Time Setup",
        setupPrice: "$200",
        setupNote: "Discounted from $2000 value",
        monthly: "Monthly Partner",
        monthlyPrice: "$200",
        monthlyTerm: "18-Month Term",
        setupItems: ["Full Website Build", "Kiosk & TV Setup", "Google Optimization"],
        monthlyItems: ["Hosting & Maintenance", "Booking System Fees", "Voice AI Minutes"],
        hardwareNote: "*Hardware (TV, Chromecast, Tablet) provided by client or purchased separately (~$400 total).",
        overageNote: "** Includes standard monthly credits for AI Voice, SMS & Email. Usage beyond limits billed at provider cost."
      },

      cta: {
        title: "Ready to Upgrade?",
        text: "Your 30-year legacy deserves a system that secures the next 30 years. Let's get to work.",
        btnSecondary: "Call Drew (818) 807-0200",
        finePrint: "By approving, you authorize the $200 setup fee and the $200/month agreement."
      }
    },
    es: {
      headerTitle: "Joe's Barber Shop",
      headerSubtitle: "Propuesta de Transformación Digital",
      date: "Preparado para 6117 Reseda Blvd • Dic 2025",
      toggleLabel: "English",
      
      summaryTitle: "Resumen Ejecutivo",
      letterHeadline: "Joe, hablemos de los próximos 10 años.",
      letterP1: "No te mantienes en el negocio por <strong>30 años</strong> en Tarzana por accidente. Esa calificación de <strong>4.7 estrellas</strong> en más de 90 reseñas demuestra una cosa: Sabes cuidar a la gente. Has construido un hito desde 1994.",
      letterP2: "Pero mirando tu operación hoy, veo fricción. El teléfono suena mientras estás haciendo un corte. Los clientes sin cita se van porque no saben el tiempo de espera. La confusión de '¿Quién sigue?' en el vestíbulo. Estás dirigiendo un negocio de 2025 con herramientas de 1995.",
      letterP3: "Propongo una actualización integral. No solo un sitio web, sino un <strong>Gerente de Tienda Digital</strong>. Un motor de reservas, una pantalla de TV para la cola, un quiosco de autoservicio y una recepcionista de Voz con IA. El objetivo es simple: <strong>Tú te concentras en los cortes. El sistema se encarga del resto.</strong>",
      signatureTitle: "Consultor de Estrategia Digital (20+ Años de Exp.)",

      stats: [
        { num: "40%", label: "Aumento Proy. Reservas" },
        { num: "<15%", label: "Meta Tasa de Ausencias" },
        { num: "100%", label: "Flujo Sin Papel" }
      ],

      deliverables: {
        title: "Entregables",
        headline: "El Ecosistema de 7 Puntos",
        sub: "No estamos construyendo solo una página web. Estamos instalando un sistema operativo digital.",
        items: [
          {
            icon: "fa-laptop-code",
            title: "1. El Centro (Sitio Web)",
            desc: "Diseño 'mobile-first' que honra la estética clásica de Joe's. Destaca tu historia de 30 años, galería del equipo y acceso inmediato a 'Reservar Ahora'."
          },
          {
            icon: "fa-calendar-check",
            title: "2. Motor de Reservas",
            desc: "Programación 24/7. Depósitos para asegurar espacios. Recordatorios SMS automatizados que reducen las ausencias en un 40%. Funciona mientras duermes."
          },
          {
            icon: "fa-tv",
            title: "3. Pantalla Digital en Lobby",
            desc: "Una pantalla impulsada por Chromecast para la TV de tu tienda. Muestra 'Atendiendo Ahora', 'Siguiente', y Tiempos de Espera. Elimina la pregunta '¿Quién sigue?'."
          },
          {
            icon: "fa-tablet-alt",
            title: "4. Quiosco de Autoservicio",
            desc: "Una estación de tableta simple para clientes sin cita. Los clientes se registran ellos mismos sin interrumpir un corte. Captura a aquellos sin teléfonos inteligentes."
          },
          {
            icon: "fa-microphone-alt",
            title: "5. Recepcionista de Voz IA",
            desc: "Una IA de voz que contesta el teléfono de tu tienda 24/7. Suena humana, gestiona reservas, responde preguntas sobre horarios/estacionamiento y filtra spam. Nunca más tendrás que levantar el teléfono."
          },
          {
            icon: "fa-map-marked-alt",
            title: "6. Dominio SEO Local",
            desc: "Optimización para 'Barber near Tarzana'. Curaduría de fotos, consistencia NAP y enlaces de reserva directa en Google Maps."
          }
        ]
      },

      journey: {
        title: "La Experiencia",
        headline: "Recorrido del Cliente",
        sub: "Así es como se siente el nuevo sistema para tu cliente, 'Mike'.",
        steps: [
          { title: "1. Descubrimiento", desc: "Mike busca 'Barbero Tarzana'. Ve el perfil optimizado de Joe en Google con excelentes fotos y hace clic en 'Reservar en Línea'. No necesita llamar." },
          { title: "2. Reserva", desc: "Selecciona 'Corte Degradado' con 'Barbero Tony'. Elige el martes a las 10:00 AM. Recibe una confirmación SMS instantánea." },
          { title: "3. El Recordatorio", desc: "El lunes por la noche, Mike recibe un texto: <em>'¡Nos vemos mañana a las 10 AM en Joe's! Responde C para confirmar.'</em> Él confirma. Ausencia evitada." },
          { title: "4. La Llegada", desc: "Mike entra. Ve su nombre en la <strong>Pantalla de TV</strong> bajo 'Siguiente'. Se siente reconocido y se sienta a relajarse." },
          { title: "5. Retención", desc: "Después del corte, recibe un texto automatizado: <em>'¡Gracias por venir, Mike! ¿Nos dejas una reseña?'</em> Hace clic en 5 estrellas." }
        ]
      },

      roi: {
        title: "El Cálculo de ROI",
        desc: "El sistema cuesta $200/mes. Aquí te mostramos qué tan rápido se paga solo.",
        table: [
          { k: "Costo Mensual", v: "$200", highlight: "red" },
          { k: "Precio Promedio Corte", v: "$35" },
          { k: "Cortes para Recuperar", v: "~6 Cortes", highlight: "green" }
        ],
        note: "Si este sistema te ahorra solo <strong>1.5 ausencias por semana</strong>, es efectivamente gratis. Cualquier cosa más allá de eso es pura ganancia."
      },

      automations: {
        title: "Automatizaciones que Construiremos",
        items: [
          { icon: "fa-magic", title: "El 'Mata Ausencias'", desc: "Recordatorios SMS 24h y 2h antes de la cita." },
          { icon: "fa-star", title: "El Constructor de Reputación", desc: "Texto automático pidiendo una reseña en Google 1 hora después del servicio." },
          { icon: "fa-birthday-cake", title: "El Ciclo de Lealtad", desc: "Descuentos de cumpleaños enviados automáticamente a clientes pasados." },
          { icon: "fa-undo", title: "El 'Regresa'", desc: "Si un cliente no ha reservado en 5 semanas, dale un empujoncito." }
        ]
      },

      design: {
        title: "Dirección Visual",
        headline: "Inspiración de Diseño",
        sub: "Modelamos el éxito. Elige el estilo que mejor se adapte a Joe's.",
        classic: "El Modelo 'Clásico'",
        classicDesc: "Atemporal, Oro y Crema. Sensación de Herencia.",
        modern: "El Modelo 'Moderno'",
        modernDesc: "Audaz, Oscuro, Alto Contraste. Nítido."
      },

      roadmap: {
        title: "Plan de Ejecución",
        headline: "Hoja de Ruta de 90 Días",
        headers: ["Fase", "Enfoque", "Resultado"],
        rows: [
          { col1: "Mes 1: Lanzamiento", col2: "Construir Web, Configurar Quiosco, Instalar TV", col3: "Sistema completo en vivo. Personal capacitado. Clientes usando Quiosco." },
          { col1: "Mes 2: Optimizar", col2: "Ajuste de Voz IA y SEO", col3: "Ranking para 'Barbero Tarzana'. IA manejando 80% de llamadas." },
          { col1: "Mes 3: Crecimiento", col2: "Generación de Reseñas y Marketing", col3: "Llegar a 150+ Reseñas. Email marketing a base de clientes." }
        ]
      },

      pricing: {
        title: "Inversión",
        headline: "Estructura de Precios Simple",
        sub: "Transparente. Sin tarifas ocultas. Cancela en cualquier momento después del plazo.",
        setup: "Configuración Única",
        setupPrice: "$200",
        setupNote: "Descuento del valor de $2000",
        monthly: "Socio Mensual",
        monthlyPrice: "$200",
        monthlyTerm: "Plazo de 18 Meses",
        setupItems: ["Desarrollo Web Completo", "Configuración de Quiosco y TV", "Optimización Google"],
        monthlyItems: ["Hosting y Mantenimiento", "Tarifas del Sistema de Reservas", "Minutos de Voz IA"],
        hardwareNote: "*Hardware (TV, Chromecast, Tableta) proporcionado por el cliente o comprado por separado (~$400 total).",
        overageNote: "** Incluye créditos mensuales estándar para Voz IA, SMS y Email. El exceso se factura al costo del proveedor."
      },

      cta: {
        title: "¿Listo para Actualizar?",
        text: "Tu legado de 30 años merece un sistema que asegure los próximos 30 años. Manos a la obra.",
        btnSecondary: "Llamar a Drew (818) 807-0200",
        finePrint: "Al aprobar, autorizas la tarifa de configuración de $200 y el acuerdo de $200/mes."
      }
    }
  };

  const t = content[lang];

  return (
    <div className="container">
      <header className="header">
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')} 
            className="lang-toggle"
            aria-label="Switch Language"
          >
            {t.toggleLabel}
          </button>
          <h1>{t.headerTitle}</h1>
          <h2>{t.headerSubtitle}</h2>
          <p style={{fontFamily: "'Playfair Display', serif", fontStyle: "italic", opacity: 0.8, marginTop: "10px"}}>
            {t.date}
          </p>
      </header>

      {/* THE CONSULTANT'S LETTER */}
      <div className="letter-section">
          <p style={{textTransform: "uppercase", color: "#888", fontSize: "0.8em", letterSpacing: "2px", marginBottom: "30px"}}>
            {t.summaryTitle}
          </p>
          
          <h3 style={{fontSize: "2em", marginBottom: "25px"}}>{t.letterHeadline}</h3>
          
          <p dangerouslySetInnerHTML={{__html: t.letterP1}}></p>
          <p dangerouslySetInnerHTML={{__html: t.letterP2}}></p>
          <p dangerouslySetInnerHTML={{__html: t.letterP3}}></p>

          <div className="signature">Drew Quevedo</div>
          <p style={{fontSize: "0.9em", color: "#666", marginTop: "5px"}}>{t.signatureTitle}</p>
      </div>

      {/* ROI HIGH LEVEL */}
      <div className="stats-grid">
          {t.stats.map((stat, i) => (
             <div className="stat-box" key={i}>
                <div className="stat-number">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
            </div>
          ))}
      </div>

      {/* THE 7 PILLARS */}
      <section className="section">
          <div className="section-header">
              <span className="sub">{t.deliverables.title}</span>
              <h3>{t.deliverables.headline}</h3>
              <p>{t.deliverables.sub}</p>
          </div>

          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px"}}>
             {t.deliverables.items.map((item, i) => (
                <div key={i} style={{background: "white", padding: "30px", borderTop: "4px solid var(--primary-gold)", boxShadow: "0 5px 15px rgba(0,0,0,0.05)"}}>
                   <div style={{color: "var(--primary-gold)", fontSize: "2em", marginBottom: "20px"}}><i className={`fas ${item.icon}`}></i></div>
                   <h4 style={{fontSize: "1.2em", marginBottom: "15px"}}>{item.title}</h4>
                   <p style={{fontSize: "0.95em", color: "#666", marginBottom: "20px"}}>{item.desc}</p>
                </div>
             ))}
          </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="section" style={{background: "#fafafa"}}>
          <div className="section-header">
              <span className="sub">{t.journey.title}</span>
              <h3>{t.journey.headline}</h3>
              <p>{t.journey.sub}</p>
          </div>
          
          <div className="timeline">
            {t.journey.steps.map((step, i) => (
              <div className="timeline-item" key={i}>
                  <div className="timeline-week">{step.title}</div>
                  <p dangerouslySetInnerHTML={{__html: step.desc}}></p>
              </div>
            ))}
          </div>
      </section>

      {/* AUTOMATION & ROI */}
      <section className="section">
         <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px"}}>
            
            {/* ROI Calculator */}
            <div>
               <h3 style={{marginBottom: "20px"}}>{t.roi.title}</h3>
               <p style={{marginBottom: "20px"}}>{t.roi.desc}</p>
               <table className="data-table">
                  <tbody>
                     {t.roi.table.map((row, i) => (
                       <tr key={i}>
                          <td><strong>{row.k}</strong></td>
                          <td style={{color: row.highlight || "inherit", fontWeight: row.highlight ? "bold" : "normal"}}>{row.v}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
               <div className="consultant-note" style={{marginTop: "20px"}} dangerouslySetInnerHTML={{__html: t.roi.note}}></div>
            </div>

            {/* Automations */}
            <div>
               <h3 style={{marginBottom: "20px"}}>{t.automations.title}</h3>
               <ul className="features-list">
                  {t.automations.items.map((item, i) => (
                    <li key={i}>
                       <i className={`fas ${item.icon}`}></i> 
                       <strong>{item.title}</strong><br/>
                       <span style={{fontSize: "0.9em", color: "#666"}}>{item.desc}</span>
                    </li>
                  ))}
               </ul>
            </div>

         </div>
      </section>

      {/* DESIGN STRATEGY */}
      <section className="section" style={{background: "#f4f1ea"}}>
          <div className="section-header">
              <span className="sub">{t.design.title}</span>
              <h3>{t.design.headline}</h3>
              <p>{t.design.sub}</p>
          </div>

          <div className="design-grid">
              <a href="https://braber.peerduck.com/perfect-cut/" target="_blank" rel="noopener noreferrer" className="design-card">
                  <div className="design-image-container">
                      <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop" alt="Classic Style" />
                  </div>
                  <div className="design-info">
                      <h4>{t.design.classic}</h4>
                      <p>{t.design.classicDesc}</p>
                  </div>
              </a>
              <a href="https://preview.themeforest.net/item/becko-barbershop-hair-salon-wordpress-theme/full_screen_preview/57861262" target="_blank" rel="noopener noreferrer" className="design-card">
                  <div className="design-image-container">
                      <img src="https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=1000&auto=format&fit=crop" alt="Modern Style" />
                  </div>
                  <div className="design-info">
                      <h4>{t.design.modern}</h4>
                      <p>{t.design.modernDesc}</p>
                  </div>
              </a>
          </div>
      </section>

      {/* ROADMAP */}
      <section className="section">
          <div className="section-header">
             <span className="sub">{t.roadmap.title}</span>
             <h3>{t.roadmap.headline}</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                {t.roadmap.headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
               {t.roadmap.rows.map((row, i) => (
                 <tr key={i}>
                   <td><strong>{row.col1}</strong></td>
                   <td>{row.col2}</td>
                   <td>{row.col3}</td>
                 </tr>
               ))}
            </tbody>
          </table>
      </section>

      {/* PRICING */}
      <section className="section" style={{background: "#111", color: "#fff"}}>
          <div className="section-header">
             <span className="sub" style={{color: "var(--primary-gold)"}}>{t.pricing.title}</span>
             <h3 style={{color: "#fff"}}>{t.pricing.headline}</h3>
             <p style={{color: "#aaa"}}>{t.pricing.sub}</p>
          </div>
          <div className="pricing-wrapper" style={{maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "row", flexWrap: "wrap", border: "1px solid #333"}}>
              <div className="pricing-card" style={{background: "#1a1a1a", borderRight: "1px solid #333"}}>
                  <h4 style={{color: "#fff"}}>{t.pricing.setup}</h4>
                  <div className="price" style={{color: "var(--primary-gold)"}}>{t.pricing.setupPrice}</div>
                  <p style={{fontSize: "0.9em", color: "#888"}}>{t.pricing.setupNote}</p>
                  <ul className="features-list" style={{borderColor: "#333"}}>
                    {t.pricing.setupItems.map((item, i) => (
                      <li key={i} style={{borderBottom: "1px solid #333"}}>{item}</li>
                    ))}
                  </ul>
              </div>
              <div className="pricing-card" style={{background: "#000"}}>
                  <h4 style={{color: "#fff"}}>{t.pricing.monthly}</h4>
                  <div className="price" style={{color: "#fff"}}>{t.pricing.monthlyPrice} <span>/ {lang === 'en' ? 'Month' : 'Mes'}</span></div>
                  <p style={{fontSize: "0.9em", color: "#888"}}>{t.pricing.monthlyTerm}</p>
                  <ul className="features-list">
                    {t.pricing.monthlyItems.map((item, i) => (
                      <li key={i} style={{borderBottom: "1px solid #333"}}>{item}</li>
                    ))}
                  </ul>
              </div>
          </div>
          <p style={{textAlign: "center", marginTop: "30px", fontSize: "0.9em", color: "#666", fontStyle: "italic"}}>
            {t.pricing.hardwareNote}
            <br />
            {t.pricing.overageNote}
          </p>
      </section>

      {/* CTA */}
      <div className="cta-footer">
          <h2 style={{fontFamily: "'Playfair Display', serif", fontSize: "2.5em", marginBottom: "20px"}}>{t.cta.title}</h2>
          <p style={{fontSize: "1.2em", maxWidth: "600px", margin: "0 auto"}}>
            {t.cta.text}
          </p>
          
          <div className="cta-group">
              <a href="tel:8189929871" className="cta-btn-secondary">{t.cta.btnSecondary}</a>
          </div>

          <p className="fine-print">
            {t.cta.finePrint}
          </p>
      </div>

    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}