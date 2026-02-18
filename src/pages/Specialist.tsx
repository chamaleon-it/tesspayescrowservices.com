import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';

const Specialist = () => {
    return (
        <div>
            <Helmet>
                <title>Specialist Projects Escrow | Custom Engagement Financial Security</title>
                <meta name="description" content="Independent Account Structures for Custom & Specialist Projects: Escrow Accounts and Third-Party Managed Payment Accounts for bespoke engagements." />
            </Helmet>

            <Hero
                title="Specialist Projects Escrow"
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
                        <h2 className="heading-lg mb-6">Independent Account Structures for Custom & Specialist Projects</h2>
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="mb-6">
                                Highly customised projects operate differently from standard commercial engagements. Whether the work involves a private build, specialist fabrication, luxury fit-out or a one-off commissioned asset, the commercial dynamic is usually more personal, more flexible and more financially concentrated.
                            </p>
                            <p className="mb-6">
                                These projects frequently combine:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Significant upfront payments</li>
                                <li>Tailored specifications</li>
                                <li>Evolving design decisions</li>
                                <li>Limited substitution of suppliers or specialists</li>
                            </ul>
                            <p className="mb-6">
                                Because the output is unique, conventional payment mechanics can struggle to keep pace with the fluid nature of the work. Independent account structures provide a stabilising framework that protects both sides without constraining creativity or delivery.
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
                        <h3 className="heading-md mb-6">Financial Risk in Custom Engagements</h3>
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="mb-6">
                                In bespoke environments, payment risk typically arises from asymmetry of timing and reliance.
                            </p>
                            <p className="mb-6">
                                Clients are often asked to release funds early to cover design development, specialist materials or workshop time — sometimes long before tangible results are visible. At the same time, designers, craftspeople or manufacturers may commit substantial time and capital before receiving final payment.
                            </p>
                            <p className="mb-6">
                                This creates a delicate balance of trust.
                            </p>
                            <p className="mb-4 font-semibold">Additional vulnerabilities include:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Heavy reliance on a single specialist or workshop</li>
                                <li>International sourcing of materials</li>
                                <li>Cross-border design or fabrication</li>
                                <li>Long lead times for custom components</li>
                            </ul>
                            <p className="mb-6">
                                If delays occur, expectations shift or a counterparty encounters financial difficulty, recovering funds or enforcing performance can become complicated — particularly where work spans jurisdictions.
                            </p>
                            <p>
                                In these situations, how funds are structured during the lifecycle of the project can be just as important as the contract itself.
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
                            <h3 className="heading-md mb-6 text-primary-teal">Escrow in Specialist and Custom Projects</h3>
                            <p className="mb-6 text-gray-700">
                                Escrow arrangements are frequently used to protect staged payments and performance milestones.
                            </p>
                            <p className="mb-6 text-gray-700">
                                Under this structure, funds are deposited with an independent escrow agent and released only when agreed benchmarks are met.
                            </p>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Common Uses</h4>
                            <ol className="list-decimal pl-5 mb-6 space-y-3 text-gray-700">
                                <li>
                                    <strong>Milestone-Based Stage Payments:</strong> Clients deposit funds in advance, with release linked to inspections, sign-off events or completion of agreed phases.
                                </li>
                                <li>
                                    <strong>Delivery and Acceptance Protection:</strong> Final balances may be held in escrow until commissioning, installation or snagging is completed.
                                </li>
                                <li>
                                    <strong>Post-Completion Adjustments:</strong> Where finishing works or refinements are anticipated, escrow can retain a portion of funds to ensure completion.
                                </li>
                                <li>
                                    <strong>Alternative to Guarantees:</strong> In higher-value projects, escrow can replace personal guarantees or insurance-backed instruments, offering direct and transparent cash security.
                                </li>
                            </ol>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Key Characteristics</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Neutral third-party control</li>
                                <li>Condition-based release</li>
                                <li>Segregated funds</li>
                                <li>Reduced reliance on informal trust</li>
                            </ul>
                            <p className="mt-6 text-gray-700 italic border-l-4 border-primary-teal pl-4">
                                Escrow is particularly effective where the concern is non-delivery or incomplete performance.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-100"
                        >
                            <h3 className="heading-md mb-6 text-primary-blue">Structured Payment Administration for Custom Projects</h3>
                            <p className="mb-6 text-gray-700">
                                In some bespoke engagements, the priority is not conditional holding but organised payment coordination.
                            </p>
                            <p className="mb-6 text-gray-700">
                                Third-party managed payment accounts provide a framework for administering staged payments in a transparent and controlled manner.
                            </p>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Typical Applications</h4>
                            <ol className="list-decimal pl-5 mb-6 space-y-3 text-gray-700">
                                <li>
                                    <strong>Complex Payment Schedules:</strong> Where payments are spread across design, fabrication, transport and installation phases.
                                </li>
                                <li>
                                    <strong>Multi-Party Involvement:</strong> If specialists, subcontractors or international suppliers require coordinated disbursement.
                                </li>
                                <li>
                                    <strong>Ongoing Project Funding:</strong> Where funds are contributed over time and released according to agreed instructions.
                                </li>
                            </ol>

                            <h4 className="font-bold text-lg mb-3 text-gray-900">Core Features</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Ring-fenced project funds</li>
                                <li>Transparent reporting</li>
                                <li>Structured disbursement</li>
                                <li>Reduced dependency on one party’s internal accounting</li>
                            </ul>
                            <p className="mt-6 text-gray-700 italic border-l-4 border-primary-blue pl-4">
                                Unlike escrow, these arrangements are focused less on dispute triggers and more on clarity and financial governance throughout delivery.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h3 className="heading-md mb-6">Why Independent Structures Add Value</h3>
                        <p className="mb-6 text-gray-700 text-lg">
                            For high-value custom projects, independent account mechanisms:
                        </p>
                        <ul className="text-left inline-block space-y-3 mb-8 text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Align payment timing with measurable progress
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Protect early-stage capital commitments
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Reduce exposure to counterparty financial instability
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Increase confidence in cross-border arrangements
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                                Provide an orderly framework for evolving specifications
                            </li>
                        </ul>
                        <p className="text-xl font-medium text-gray-900">
                            By separating custody of funds from the contracting parties, these structures create a rules-based payment environment. That allows clients and specialists to concentrate on quality and delivery rather than financial uncertainty.
                        </p>
                    </motion.div>
                </div>
            </section>

            <CTASection
                title="Secure Your Specialist Projects"
                description="Contact us to discuss which structure best suits your bespoke engagement."
                buttonText="Consult Our Experts"
                buttonLink="/contact"
            />
        </div>
    );
};

export default Specialist;
