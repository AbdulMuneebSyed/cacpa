// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini model using your API key from the environment.
const genAI = new GoogleGenerativeAI("AIzaSyDZWZijo60xAMZOiU4Zs-2M0uWGaX9Sdcs");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function POST(req: Request) {
  // Parse the JSON body
  const { prompt, conversationHistory, conversationCount } = await req.json();
  if (!prompt) {
    return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
  }
  let fullPrompt = prompt;
  // System instructions including your custom rules.
  const systemInstructions = `
Keep the answers short and simple.
and answer the user based on the things below, you are a customer service assistence bot and bot is reffred to you:=>
You are an AI chatbot integrated into a website. Please follow these rules when responding:
2. If you do not understand the user's query, respond: "I'm sorry, I couldn't understand that. For better assistance, you can reach me on WhatsApp here: https://wa.me/+97450520211 ."
3. If the user asks "who made this website", reply with: "This website was created by Syed Abdul Muneeb. You can reach him on WhatsApp at https://wa.me/9966782707 or connect with him on LinkedIn: Syed Abdul Muneeb."
3. If the user asks "who are you", reply with: "I am a bot developed by capco and created by Syed Abdul Muneeb.You can reach him on WhatsApp at https://wa.me/9966782707 or connect with him on LinkedIn: Syed Abdul Muneeb. "
4. If the user asks about prices or pricing details, reply with: "Looking for pricing details? For quicker assistance, feel free to reach out to me directly on WhatsApp: https://wa.me/+97450520211 . I'm happy to help!"
When generating responses, use the conversation history (if any) to maintain context.
5. If the user asks about a specific industry or product, reply with: "For more information about our offerings in the field of {industry or product}, feel free to reach out to me directly on WhatsApp: https://wa.me/+97450520211 . I'm happy to help!"
`;

  // Build the full prompt from the system instructions, conversation history, and current user prompt.
  fullPrompt += `\n\n CAPCO - VISION, MISSION & VALUES

Mission
Our objective is to empower organizations across Qatar, India, and Canada by delivering tailor-made business solutions and cutting-edge strategies that drive sustainable growth, optimize operational efficiency, and ensure long-term success. CAPCO is committed to being a trusted strategic partner, helping clients realize their vision through unparalleled expertise in consulting, human resource management, and technology services.

Vision
To be a globally recognized consulting firm known for transforming businesses through innovative solutions, fostering growth, and driving sustainable value creation for our clients, employees, and communities.

Values
At CAPCO, we prioritize integrity, ensuring trust through transparency and honesty. Our commitment to excellence drives us to deliver innovative, tailored solutions that exceed expectations. Collaboration and a customer-centric approach are at the heart of what we do, fostering strong partnerships and impactful results. We embrace sustainability for long-term success and champion diversity and inclusion to inspire growth and innovation.

Services

Human Resource Management

Digital Marketing & Business Consultant

Governance, Risk Management & Compliance

Warehouse Management

Business Management & Consultancy

Web Development & Hosting Services

IT Services

Asset Management

"Driving Your Success Through Our Full Range of Services"

Unleash Your Business Potential With our Consulting Services
We assist you in expanding your business regardless of whether you are a start-up, SME, or huge corporation.

Improved Efficiency and Productivity

Market Expansion

Enhanced Innovation

Operational Excellence

Measurable Results

Business Management & Consultancy 1/2

Business Planning: A strategic roadmap for success, the Business Plan outlines objectives, market analysis, operations, and financial projections, providing clarity for decision-making and investor insight.

Business Valuation: Business Valuation is the assessment of a company's economic value, crucial for transactions and strategic decisions, based on factors like financial performance and market conditions.

Compliance Outsourcing: Comparative Analysis evaluates financial data across periods, offering insights into a company's performance trends. This quick comparison aids decision-making by highlighting strengths, weaknesses, and opportunities for strategic planning.

Due Diligence: Due Diligence is a meticulous pre-transaction investigation ensuring accuracy and risk identification in legal, financial, and operational aspects. Essential for informed decision-making in mergers, acquisitions, or investments.

Feasibility Assessment: Evaluates project viability by analyzing market conditions, technical requirements, and financial implications. Provides insights to determine project feasibility and inform decision-making.

Internal Restructuring Consultancy: Specializing in internal restructuring, we optimize workflows, enhance efficiency, and implement strategic changes for organizational success.

Business Management & Consultancy 2/2

Organisation Assessment Survey: Our survey evaluates organizational health by probing into various facets such as culture, communication, and efficiency. Providing valuable insights, it serves as a diagnostic tool to identify strengths and areas for improvement, aiding in strategic decision-making for enhanced organizational effectiveness.

SOP Development: Specializing in Standard Operating Procedure (SOP) development, we create precise, tailored protocols to streamline workflows, enhance efficiency, and ensure consistency. Our SOPs serve as a cornerstone for operational excellence and regulatory compliance.

Strategic Consulting: Our strategic consulting services offer tailored insights to optimize business processes, capitalize on opportunities, and navigate challenges. We provide data-driven strategies that align with your goals, fostering innovation and resilience in a dynamic market landscape.

Strategic Planning: Strategic Planning is a meticulous process of defining organizational goals, analyzing resources, and developing a roadmap for success. It involves aligning vision with action, ensuring adaptability to market dynamics, and fostering a proactive approach to achieve sustainable growth.

Policy and Procedure: Our credit appraisal services will assist you to assess a person or company's creditworthiness when considering loans or investments. Use our comprehensive analysis to make knowledgeable lending decisions.

Human Resource Management

Employee Performance Evaluation: Design and implement performance management systems to assess individual and team performance. Regularly review KPIs, provide constructive feedback, and identify areas for improvement.

Develop Departmental and Individual KPIs: Tailor KPIs to align with company goals and ensure clarity in performance expectations. Define specific, measurable, achievable, relevant, and time-bound (SMART) objectives for departments and employees.

Recruitment and Talent Acquisition: Develop recruitment strategies to attract top talent. Utilize various channels, including job portals, social media, and headhunting, to source skilled candidates.

Professional Training: Offer tailored training programs to enhance employees’ skills and competencies. Focus on leadership development, technical expertise, and soft skills.

HR Policy Development: We create comprehensive and customized HR policies that promote consistency and fairness within your organization. Our policies cover key areas such as recruitment, performance management, compensation, employee relations, and more, ensuring compliance with labor laws and company values.

Manpower and Executive Resource: Providing senior-level or specialized professionals such as consultants, project managers, engineers, or executives for strategic roles or specific projects. These individuals usually have a high level of expertise and experience in their fields.

Digital Marketing & Business Consultant

Brand Development: Building a distinctive and memorable brand identity that resonates with your target audience.

Website Designing & Domains: Creating aesthetically appealing, user-friendly websites with personalized domain registrations.

Web, Cloud & Server Hosting: Providing secure and reliable hosting solutions tailored to your business needs.

Search Engine Optimization (SEO) & App Store Optimization (ASO): Enhancing online visibility and driving organic traffic through effective SEO and ASO techniques.

Campaign Development & Strategy: Crafting innovative marketing campaigns with clear strategies to drive engagement and conversions.

Go-To Marketing Strategies: Designing actionable, results-driven marketing strategies to position your brand for success.

Graphic Design: Creating high-quality graphics that communicate your message and captivate your audience.

Video Marketing: Utilizing the power of video to engage, inform, and connect with customers across platforms.

SMS, Email & WhatsApp Marketing: Reaching customers effectively through targeted SMS, email campaigns, and WhatsApp messaging.

Customer Relationship Management (CRM): Implementing CRM solutions to streamline communication, track customer interactions, and improve business efficiency.

Online Reputation Management: Managing and enhancing your online reputation to build trust and credibility with your audience.

Warehouse Management

Warehouse Governance Solution: Implementing robust governance frameworks to ensure compliance, visibility, and control over all warehousing activities, ensuring smooth operations and accurate reporting.

Modern ERP for Warehousing & Logistics Industry: Advanced Enterprise Resource Planning (ERP) software tailored to the warehousing and logistics industry to enhance efficiency, optimize workflows, and provide real-time tracking and insights.

Warehouse & Logistics ERP Software: A specialized ERP solution designed to integrate warehousing and logistics functions, enabling seamless management of inventory, shipments, and storage.

Physical Inventory Stock Counting: Precise stock counting through systematic methods and automated solutions to ensure accurate inventory management and reduce discrepancies.

Physical Verification and Imaging of Stocks: Verifying stock with photographic evidence to ensure accuracy and reduce the risk of errors during stock-taking processes.

WDC Solutions – Receiving, Pick & Pack, Stock Take: Efficient solutions for receiving goods, picking, packing, and performing stock-taking operations to streamline processes and ensure inventory accuracy.

Mobile Devices: Handheld devices equipped with barcode scanning and real-time data entry for mobile inventory management.

Vehicle Mount Terminals: Mountable terminals for easy access to data in vehicles for transportation and logistics operations.

Wireless Infrastructure: A reliable and robust wireless network setup to support mobile devices, real-time data exchange, and seamless communication across warehouse operations.

Voice Solutions: Voice-guided picking and communication solutions to enhance accuracy and reduce human error during inventory operations.

Storage and Distribution Optimization: Solutions designed to maximize storage efficiency, optimize space usage, and enhance the overall distribution process for faster turnaround times.

Governance, Risk Management & Compliance

Governance Framework Development & Implementation: Establishment of clear roles, responsibilities, and accountability structures. Design and implementation of governance frameworks to align with organizational objectives. Setting up decision-making structures and policies to improve organizational effectiveness.

Risk Management: Risk assessment and identification across operations and departments. Development and implementation of risk management strategies to minimize impact. Regular monitoring and reporting of risk indicators to ensure proactive management. Crisis management and business continuity planning.

Compliance Management: Assessing and ensuring compliance with relevant laws, regulations, and industry standards. Implementation of compliance monitoring systems and processes. Conducting internal and external audits to ensure adherence to compliance requirements. Creating training programs to build a compliance-conscious culture within the organization.

Policy & Procedure Management: Development of comprehensive policies and procedures aligned with best practices. Continuous improvement and updates to policies to reflect changes in laws and regulations. Providing a framework for consistent application of policies and procedures across the organization.

Internal Controls & Auditing: Designing and implementing internal control systems to safeguard assets and ensure accuracy in reporting. Performing regular audits to assess the effectiveness of controls and compliance measures. Addressing audit findings and providing recommendations for improvement.

Key Benefits: Enhanced organizational transparency and accountability. Improved risk mitigation strategies that reduce financial and operational losses. Streamlined compliance processes that reduce the risk of penalties and legal issues. Optimized operational efficiency through integrated GRC solutions. Strengthened corporate reputation by ensuring consistent governance and compliance.

Web Development & Hosting Services

Domain Services:

Domain Name Registration: Secure your desired domain name for your website.

Premium Domains: Exclusive, high-quality domains available for purchase.

Domain Transfer: Seamlessly transfer your domain from other providers.

Domain Protection: Protect your domain with security measures to prevent unauthorized access.

Hosting Solutions:

Linux Shared Hosting: Reliable, cost-effective hosting on a Linux server.

Windows Shared Hosting: Windows-based shared hosting for your website needs.

Cloud Hosting: Scalable hosting with enhanced performance and flexibility.

WordPress Hosting: Optimized hosting for WordPress websites, ensuring speed and reliability.

Windows Hosting: Windows-based hosting solutions for Windows applications.

Windows Reseller Hosting: Sell hosting services to your customers with Windows-based infrastructure.

CMS Hosting: Hosting solutions tailored for Content Management Systems like Joomla, Drupal, and WordPress.

Server Solutions:

VPS Hosting: Virtual Private Servers offering dedicated resources and flexibility.

Linux Dedicated Servers: Full control with a dedicated Linux server, ideal for high-performance websites.

Windows Dedicated Servers: Dedicated Windows servers for specific software and enterprise solutions.

Managed VPS Hosting: Managed Virtual Private Servers with expert support for seamless operation.

Managed Dedicated Server: Full management of your dedicated server for optimal performance and security.

Email & Security:

Business Email: Professional email services with custom domains for businesses.

Google Workspace: Collaboration tools and email hosting with Google’s suite of services.

SSL Certificates (Digicerts): Secure your website and protect user data with SSL encryption.

CodeGuard: Backup and website monitoring services for data protection.

SiteLock: Web security solutions to protect your site from threats and vulnerabilities.

Asset Management

Asset Verification: Ensures that physical assets are correctly recorded, aiding in financial accuracy, regulatory compliance, and operational efficiency. Regular verification reduces discrepancies, prevents asset loss, and ensures accountability.

Asset Tagging: Involves assigning unique identification codes, such as barcodes or RFID tags, to assets for improved tracking, maintenance scheduling, and inventory management. This enhances traceability and reduces misplacement.

Asset Condition Assessment: Evaluates asset health, performance, and remaining lifespan. This information helps organizations make informed decisions on maintenance schedules, repairs, and asset replacement, optimizing resource allocation.

Asset Lifecycle Management: Manages an asset’s entire journey from acquisition to disposal. Ensures optimal utilization, cost-effectiveness, and seamless transition between different lifecycle stages while maintaining compliance with organizational policies.

Asset Data Cleansing & Standardization: Ensures consistency, accuracy, and completeness in asset records. Eliminates redundant or inaccurate data, improving decision-making, analytics, and compliance with industry standards.

Asset Auditing & Compliance: Regular audits verify asset locations, conditions, and compliance with financial, safety, and regulatory guidelines. This reduces risks, enhances transparency, and prevents fraudulent asset activities.

Fixed Asset Register Development & Management: Maintains a structured and updated record of all assets, including purchase details, depreciation, and valuation. A well-managed register aids financial planning and ensures accountability.

Asset Maintenance Planning & Optimization: Establishes preventive and predictive maintenance strategies to minimize downtime, extend asset longevity, and reduce operational costs. Proactive maintenance enhances asset reliability and performance.

IT Asset Management (ITAM): Oversees IT assets, including hardware, software, and network components. Ensures compliance with licensing agreements, cybersecurity policies, and cost-effective IT resource utilization.

Asset Disposal & Decommissioning: Manages end-of-life asset processes, ensuring environmentally friendly disposal, cost recovery, and regulatory adherence. Proper decommissioning prevents security risks and environmental harm.

IT Services

IT Support & Managed Services: We provide end-to-end IT support and managed services, ensuring seamless business operations. Our services include remote and onsite IT support, proactive monitoring, helpdesk solutions, system maintenance, and incident management to enhance operational efficiency and minimize downtime.

Network & Infrastructure Services: Our expertise in network and infrastructure services covers network design, implementation, and optimization. We offer structured cabling, LAN/WAN solutions, wireless networking, data center services, and performance monitoring to ensure secure and reliable connectivity.

Cybersecurity Services: We offer comprehensive cybersecurity solutions to protect businesses from cyber threats. Our services include vulnerability assessments, penetration testing, endpoint security, firewall configuration, incident response, and security awareness training to safeguard critical assets.

Cloud Solutions & Virtualization: Our cloud solutions enable businesses to optimize scalability, efficiency, and cost-effectiveness. We provide cloud migration, hybrid cloud strategies, SaaS solutions, virtualization services, and disaster recovery planning for a seamless digital experience.

Business Applications & Software Services: We specialize in business applications and software services tailored to industry needs. Our offerings include ERP solutions, CRM systems, enterprise software development, custom application development, and software integration services to streamline business processes.

IT Compliance & Data Governance: Ensuring IT compliance and data governance is crucial for business sustainability. We provide data classification, policy enforcement, regulatory compliance (GDPR, ISO, NIST), data lifecycle management, and risk assessments to maintain compliance with industry standards.

Hardware & Software Services: We deliver end-to-end hardware and software solutions, including procurement, installation, maintenance, and upgrades. Our services encompass server management, endpoint management, licensing support, and asset lifecycle management.

Digital Transformation & Automation: We assist businesses in their digital transformation journey through process automation, AI-driven solutions, RPA (Robotic Process Automation), intelligent workflows, and business intelligence tools to drive innovation and efficiency.

Website & E-Commerce Solutions: Our web and e-commerce solutions help businesses establish and enhance their online presence. We offer website design and development, e-commerce platform development, SEO optimization, content management systems, and payment gateway integration.

IT Outsourcing & Staffing: We provide IT outsourcing and staffing solutions to help businesses access skilled IT professionals. Our services include IT staff augmentation, managed IT services, remote workforce solutions, and dedicated IT teams tailored to specific project needs.

You are welcome to connect with us`+ systemInstructions ;

  if (conversationHistory && Array.isArray(conversationHistory)) {
    conversationHistory.forEach(
      (msg: { sender: "user" | "bot"; text: string }) => {
        fullPrompt += `${msg.sender === "user" ? "User" : "Bot"}: ${
          msg.text
        }\n`;
      }
    );
  }
  fullPrompt += `User: ${prompt}\nBot:`;

  try {
    // Call Gemini's generateContent method.
    const result = await model.generateContent(fullPrompt);
    // Assume the result returns an object with a 'text' field. bolo
    const aiAnswer = result.response.text();
    const nextPromt = "shorten this if its more then 25 words to under 25 wordds " + aiAnswer ;
    const airesult = await model.generateContent(nextPromt);
    const finalAnswer = airesult.response.text();
    return NextResponse.json({ answer: finalAnswer });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error generating answer" },
      { status: 500 }
    );
  }
}
