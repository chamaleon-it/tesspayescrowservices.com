import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <div>
            <Helmet>
                <title>Privacy Policy | TessPay Escrow Services</title>
                <meta name="description" content="Read TessPay Escrow Services' privacy policy to understand how we collect, use, and protect your personal information." />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href="https://tesspayescrowservices.com/privacy-policy" />
            </Helmet>

            <div className="bg-gradient-primary text-white py-16">
                <div className="container-custom">
                    <h1 className="heading-xl mb-4">Privacy Policy</h1>
                    <p className="text-lg opacity-90">Last Updated: February 17, 2026</p>
                </div>
            </div>

            <div className="section-padding">
                <div className="container-custom max-w-4xl">
                    <div className="prose prose-lg max-w-none">

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">1. Introduction</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                TessPay Escrow Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our escrow services and visit our website.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">2. Information We Collect</h2>

                            <h3 className="heading-sm mb-3">2.1 Personal Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Register for an account or use our escrow services</li>
                                <li>Fill out a form or contact us</li>
                                <li>Subscribe to our newsletter or marketing communications</li>
                                <li>Participate in surveys or promotions</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This information may include:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Name, email address, phone number</li>
                                <li>Mailing address and billing information</li>
                                <li>Social Security Number or Tax ID (for escrow transactions)</li>
                                <li>Financial account information</li>
                                <li>Transaction details and documentation</li>
                            </ul>

                            <h3 className="heading-sm mb-3">2.2 Automatically Collected Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When you visit our website, we may automatically collect certain information about your device, including:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>IP address and browser type</li>
                                <li>Operating system and device information</li>
                                <li>Pages viewed and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Process and manage escrow transactions</li>
                                <li>Verify your identity and prevent fraud</li>
                                <li>Communicate with you about your transactions</li>
                                <li>Provide customer support and respond to inquiries</li>
                                <li>Send administrative information and updates</li>
                                <li>Improve our website and services</li>
                                <li>Comply with legal obligations and regulations</li>
                                <li>Send marketing communications (with your consent)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">4. Information Sharing and Disclosure</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>With Transaction Parties:</strong> Information necessary to complete escrow transactions</li>
                                <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                                <li><strong>With Your Consent:</strong> When you authorize us to share your information</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                We do not sell your personal information to third parties.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">5. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We implement appropriate technical and organizational security measures to protect your personal information, including:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li>Encryption of sensitive data in transit and at rest</li>
                                <li>Secure servers and firewalls</li>
                                <li>Regular security assessments and updates</li>
                                <li>Access controls and authentication procedures</li>
                                <li>Employee training on data protection</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">6. Your Privacy Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                <li><strong>Access:</strong> Request a copy of your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                                <li><strong>Data Portability:</strong> Request transfer of your data</li>
                                <li><strong>Restriction:</strong> Request restriction of processing</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                To exercise these rights, please contact us at privacy@tesspayescrowservices.com.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">7. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">8. Third-Party Links</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">9. Children's Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">10. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="heading-md mb-4">11. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-2"><strong>TessPay Escrow Services</strong></p>
                                <p className="text-gray-700 mb-2">Email: privacy@tesspayescrowservices.com</p>
                                <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
                                <p className="text-gray-700">Address: 123 Escrow Lane, Los Angeles, CA 90001</p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
