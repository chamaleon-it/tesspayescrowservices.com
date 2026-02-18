import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';

const Corporate = () => {
    return (
        <div>
            <Helmet>
                <title>Corporate Escrow Services | Independent Corporate Account Structures</title>
                <meta name="description" content="Understanding Independent Corporate Account Structures: Escrow Accounts and Third-Party Managed Payment Accounts for high-value transactions." />
            </Helmet>

            <Hero
                title="Corporate Escrow Services"
                subtitle=""
                primaryButtonText="Contact Us"
                primaryButtonLink="/contact"
                showStats={false}
            />

            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="heading-lg mb-6">Understanding Independent Corporate Account Structures</h2>
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="mb-6">
                                In high-value corporate transactions, money often moves at stages when certainty is still developing. Parties may commit funds before every regulatory approval is obtained, before performance milestones are achieved, or before post-closing obligations are fully tested.
                            </p>
                            <p className="mb-6">
                                Because of this, the mechanics of holding and releasing funds are not merely operational considerations — they are core risk allocation tools. Independent account structures are designed to bridge the gap between legal rights on paper and practical financial protection in reality.
                            </p>
                            <p className="mb-6">Two of the most commonly used structures are:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Escrow accounts</li>
                                <li>Third-party managed payment accounts</li>
                            </ul>
                            <p className="mb-12">
                                Although they are sometimes mentioned together, they serve different commercial purposes.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <h3 className="heading-md mb-6">Why Payment Structures Matter in Corporate Deals</h3>
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="mb-6">
                                Corporate transactions rarely conclude cleanly on the signing date. Instead, obligations often extend beyond completion and may depend on future events.
                            </p>
                            <p className="mb-4 font-semibold">Common areas of exposure include:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Warranty and indemnity claims</li>
                                <li>Post-completion price adjustments</li>
                                <li>Earn-out arrangements linked to performance</li>
                                <li>Regulatory or third-party approvals</li>
                                <li>Deferred consideration</li>
                            </ul>
                            <p className="mb-6">
                                If funds are transferred outright to a counterparty and later disputes arise, recovery can become expensive, slow and uncertain. This is particularly true in cross-border transactions, where enforcement may require proceedings in foreign jurisdictions or reliance on arbitration awards that are not easily executed.
                            </p>
                            <p className="mb-6">
                                There is also practical execution risk. On completion, multiple payments may need to occur simultaneously — purchase price transfers, debt repayments, tax deductions, management incentives and professional fees. Without structured coordination, administrative mistakes can disrupt an otherwise carefully negotiated deal.
                            </p>
                            <p>
                                Independent accounts address both legal exposure and execution risk.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-100"
                        >
                            <h3 className="heading-md mb-6 text-primary-teal">Escrow Accounts: Securing Contingent Obligations</h3>
                            <p className="mb-6 text-gray-700">
                                An escrow arrangement involves placing funds with an independent escrow agent who holds and releases money strictly in accordance with predefined contractual conditions.
                            </p>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Primary Purpose</h4>
                            <p className="mb-6 text-gray-700">Escrow is generally used to protect against risks that continue after completion.</p>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Typical Applications</h4>
                            <ol className="list-decimal pl-5 mb-6 space-y-3 text-gray-700">
                                <li>
                                    <strong>Warranty and Indemnity Protection:</strong> A portion of the purchase price may be retained in escrow for a fixed period. If valid claims arise, funds can be released to satisfy them. If not, the balance is returned to the seller.
                                </li>
                                <li>
                                    <strong>Post-Completion Adjustments:</strong> Working capital or net debt adjustments that are finalised after closing can be secured through escrow.
                                </li>
                                <li>
                                    <strong>Earn-Out Security:</strong> Where additional consideration depends on future financial performance, escrow can hold the relevant funds pending confirmation that agreed benchmarks have been met.
                                </li>
                                <li>
                                    <strong>Good Faith or Proof of Funds:</strong> In earlier stages of a transaction, placing funds into escrow can demonstrate seriousness and financial capability.
                                </li>
                            </ol>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Core Features of Escrow</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Independent custody of funds</li>
                                <li>Clear release triggers</li>
                                <li>Defined dispute resolution procedures</li>
                                <li>Segregation from buyer and seller operating accounts</li>
                            </ul>
                            <p className="mt-6 text-gray-700 italic border-l-4 border-primary-teal pl-4">
                                Escrow is fundamentally about conditional release — money is held back until specific contractual conditions are satisfied.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-100"
                        >
                            <h3 className="heading-md mb-6 text-primary-blue">Third-Party Managed Payment Accounts: Coordinating Complex Flows</h3>
                            <p className="mb-6 text-gray-700">
                                Third-party managed payment accounts serve a different function. Rather than securing disputed or contingent claims, they are designed to streamline and control payment execution.
                            </p>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Primary Purpose</h4>
                            <p className="mb-6 text-gray-700">They operate as structured payment platforms that manage the distribution of funds in accordance with agreed instructions.</p>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Typical Applications</h4>
                            <ol className="list-decimal pl-5 mb-6 space-y-3 text-gray-700">
                                <li>
                                    <strong>Completion Payment Management:</strong> Centralising the flow of purchase price funds, debt settlements, advisory fees and tax withholdings to ensure accurate and simultaneous execution.
                                </li>
                                <li>
                                    <strong>Multi-Party Distributions:</strong> Particularly useful where there are multiple shareholders, rollover equity arrangements or incentive schemes requiring precise allocation.
                                </li>
                                <li>
                                    <strong>Ongoing Payment Administration:</strong> Post-completion deferred payments, staged consideration or transitional service arrangements can be administered through the same independent structure.
                                </li>
                            </ol>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Core Features of Managed Accounts</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Neutral oversight</li>
                                <li>Transparent audit trail</li>
                                <li>Structured sequencing of payments</li>
                                <li>Reduced reliance on one party to administer distributions</li>
                            </ul>
                            <p className="mt-6 text-gray-700 italic border-l-4 border-primary-blue pl-4">
                                Unlike escrow, these accounts are not primarily focused on conditional claims. They are focused on payment coordination and administrative certainty.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <h3 className="heading-md mb-6 text-center">Comparing the Two Structures</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-4 text-left font-bold text-gray-900 border-b">Aspect</th>
                                        <th className="p-4 text-left font-bold text-primary-teal border-b">Escrow</th>
                                        <th className="p-4 text-left font-bold text-primary-blue border-b">Third-Party Managed Account</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-4 font-semibold text-gray-900">Main Objective</td>
                                        <td className="p-4 text-gray-700">Protect against contingent liabilities</td>
                                        <td className="p-4 text-gray-700">Coordinate and execute payments</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-gray-900">Release Mechanism</td>
                                        <td className="p-4 text-gray-700">Trigger-based</td>
                                        <td className="p-4 text-gray-700">Instruction-based</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-gray-900">Dispute Function</td>
                                        <td className="p-4 text-gray-700">Often includes claim resolution framework</td>
                                        <td className="p-4 text-gray-700">Typically administrative only</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-gray-900">Timing Focus</td>
                                        <td className="p-4 text-gray-700">Often post-completion</td>
                                        <td className="p-4 text-gray-700">Frequently at completion and ongoing</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6 text-center text-gray-700 font-medium">
                            Both structures enhance transactional security, but they mitigate different categories of risk.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h3 className="heading-md mb-6">Strategic Importance in Modern Transactions</h3>
                        <p className="mb-6 text-gray-700 text-lg">
                            In complex corporate deals — particularly cross-border or multi-party transactions — independent account structures provide more than administrative convenience. They:
                        </p>
                        <ul className="text-left inline-block space-y-3 mb-8 text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Reduce enforcement uncertainty
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Improve confidence between counterparties
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Protect funds from unilateral control
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Create procedural clarity
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Limit scope for disputes
                            </li>
                        </ul>
                        <p className="text-xl font-medium text-gray-900">
                            By separating control of money from the transaction parties themselves, these structures transform financial risk into a controlled, rule-based process.
                            <br /><br />
                            In sophisticated transactions, that distinction can be critical.
                        </p>
                    </motion.div>
                </div>
            </section>

            <CTASection
                title="Secure Your Corporate Transactions"
                description="Contact us to discuss which structure best suits your transaction needs."
                buttonText="Consult Our Experts"
                buttonLink="/contact"
            />
        </div>
    );
};

export default Corporate;
