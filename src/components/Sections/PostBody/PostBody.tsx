import React from 'react';
import styles from './PostBody.module.css';
import Title from "../../UI/Title/Title.tsx";
import {TitlesLevels} from "../../../types/types.ts";

const PostBody = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <Title className={styles.title}>Best Business Consulting Services</Title>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                    going forward, a new normal that has evolved from generation X is on the runway heading towards a
                    streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
                    offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta
                    test.
                    Override the digital divide with additional clickthroughs from DevOps.</p>
                <img className={styles.image} src="/images/postimage.png" alt="Best Business Consulting Services"/>

                <Title className={styles.title}>The Digital Assets For All</Title>
                <p>Appropriately empower dynamic leadership skills after business portals. Globally my carminate
                    interactive
                    supply chains with distinctive quality vectors global sources services. Uniquely matrix economically
                    sound value through cooperative technology. Competently parallel task fully researched data and
                    enterprise process improvements.</p>
                <ul className={styles.list}>
                    <li>Dynamically target high-payoff intellectual capital for customized</li>
                    <li>Interactively procrastinate high-payoff content</li>
                    <li>Credibly reinter mediate backend ideas for cross-platform models</li>
                </ul>

                <blockquote className={styles.quote}>
                    <svg width="85" height="50" viewBox="0 0 85 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M84.6211 0.226562C83.3841 5.5 82.1146 11.0339 80.8125 16.8281C79.5755 22.6224 78.4362 28.319 77.3945 33.918C76.3529 39.4518 75.474 44.5299 74.7578 49.1523H47.4141L46.0469 47.0039C47.2188 42.2513 48.7161 37.2057 50.5391 31.8672C52.4271 26.4635 54.4453 21.0599 56.5938 15.6562C58.8073 10.1875 61.0208 5.04427 63.2344 0.226562H84.6211ZM39.0156 0.226562C37.7786 5.5 36.5091 11.0339 35.207 16.8281C33.9701 22.6224 32.8307 28.319 31.7891 33.918C30.7474 39.4518 29.8685 44.5299 29.1523 49.1523H1.80859L0.441406 47.0039C1.61328 42.2513 3.11068 37.2057 4.93359 31.8672C6.82161 26.4635 8.83984 21.0599 10.9883 15.6562C13.2018 10.1875 15.4154 5.04427 17.6289 0.226562H39.0156Z"
                            fill="#FFCC4A"/>
                    </svg>
                    <p className={styles.quoteText}>
                        “The job market of the future will consist of those jobs that robots cannot perform. Our
                        blue-collar
                        work is pattern recognition, making sense of what you see. Gardeners will still have jobs
                        because
                        every garden is different.”
                    </p>
                </blockquote>

                <Title className={styles.title}>Make real time a wireframes services</Title>
                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate
                    B2C
                    users after installed base benefits. Dramatically visualize customer directed convergence without
                    revolutionary ROI.</p>
                <ol className={styles.orderedList}>
                    <li>It brings the right people together with all the right information and tools to get work done
                    </li>
                    <li>We provide operational efficiency, data security, and flexible scale</li>
                    <li>Your best work, together in one package that works seamlessly from your computer</li>
                    <li>Delivers the tools you need to save time Improve field performance always</li>
                </ol>

                <div className={styles.memberCard}>
                    <div className={styles.avatar}>
                        <img src="/authors/4.png" alt="John"/>
                    </div>
                    <div className={styles.cardInfo}>
                        <Title className={styles.cardTitle} level={TitlesLevels.h3}>Nayra Melson</Title>
                        <p className={styles.cardRole}>Senior Manager</p>
                        <p className={styles.cardText}>Leads the global expansion of the designerz brand and
                            overseas<br/>
                            investment in solutions and innovation. Renowned coder and an<br/> authority on matters of
                            industrial
                            experience & interface.</p>
                        <ul className={styles.socials}>
                            <li>
                                <a href="https://instagram.com">
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5322 1.53379C14.5868 1.53682 15.5974 1.94133 16.3432 2.65898C17.089 3.37663 17.5094 4.3491 17.5125 5.364V13.0236C17.5094 14.0385 17.089 15.011 16.3432 15.7286C15.5974 16.4463 14.5868 16.8508 13.5322 16.8538H5.57226C4.51757 16.8508 3.50698 16.4463 2.7612 15.7286C2.01541 15.011 1.59504 14.0385 1.59189 13.0236V5.364C1.59504 4.3491 2.01541 3.37663 2.7612 2.65898C3.50698 1.94133 4.51757 1.53682 5.57226 1.53379H13.5322ZM13.5322 0.00195312H5.57226C2.50745 0.00195313 0 2.41481 0 5.364V13.0236C0 15.9728 2.50745 18.3857 5.57226 18.3857H13.5322C16.597 18.3857 19.1044 15.9728 19.1044 13.0236V5.364C19.1044 2.41481 16.597 0.00195312 13.5322 0.00195312Z"
                                            fill="white"/>
                                        <path
                                            d="M14.7274 5.36437C14.4913 5.36437 14.2604 5.29698 14.0641 5.17073C13.8677 5.04448 13.7147 4.86503 13.6243 4.65508C13.5339 4.44514 13.5103 4.21411 13.5563 3.99123C13.6024 3.76835 13.7161 3.56362 13.8831 3.40294C14.0501 3.24225 14.2629 3.13282 14.4945 3.08848C14.7261 3.04415 14.9662 3.0669 15.1844 3.15387C15.4025 3.24083 15.589 3.3881 15.7202 3.57705C15.8514 3.766 15.9214 3.98814 15.9214 4.21539C15.9218 4.36637 15.8911 4.51592 15.8312 4.65547C15.7714 4.79502 15.6834 4.92181 15.5725 5.02856C15.4615 5.13532 15.3298 5.21994 15.1848 5.27757C15.0397 5.3352 14.8843 5.36469 14.7274 5.36437ZM9.55345 6.13008C10.1832 6.13008 10.7989 6.30979 11.3225 6.64648C11.8461 6.98316 12.2543 7.46171 12.4953 8.0216C12.7363 8.58148 12.7993 9.19757 12.6765 9.79194C12.5536 10.3863 12.2503 10.9323 11.805 11.3608C11.3597 11.7893 10.7923 12.0812 10.1747 12.1994C9.55698 12.3176 8.91674 12.2569 8.3349 12.025C7.75307 11.7931 7.25576 11.4004 6.90587 10.8965C6.55599 10.3926 6.36924 9.80019 6.36924 9.19417C6.37014 8.38179 6.70591 7.60293 7.30287 7.02849C7.89983 6.45405 8.70922 6.13095 9.55345 6.13008ZM9.55345 4.59825C8.60882 4.59825 7.68541 4.86779 6.89999 5.3728C6.11456 5.8778 5.5024 6.59559 5.14091 7.43539C4.77941 8.27518 4.68483 9.19927 4.86912 10.0908C5.0534 10.9823 5.50828 11.8012 6.17623 12.444C6.84418 13.0867 7.6952 13.5245 8.62168 13.7018C9.54815 13.8791 10.5085 13.7881 11.3812 13.4403C12.2539 13.0924 12.9998 12.5033 13.5246 11.7475C14.0494 10.9917 14.3296 10.1032 14.3296 9.19417C14.3296 7.97526 13.8264 6.80626 12.9307 5.94436C12.035 5.08246 10.8201 4.59825 9.55345 4.59825Z"
                                            fill="white"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com">
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M19.8456 9.24926C19.8456 4.14368 15.4259 0.00390625 9.97507 0.00390625C4.52422 0.00390625 0.104492 4.14368 0.104492 9.24926C0.104492 13.8637 3.71342 17.6885 8.43279 18.3828V11.9226H5.92593V9.24926H8.43279V7.2124C8.43279 4.89569 9.90676 3.61496 12.1611 3.61496C13.2412 3.61496 14.371 3.79574 14.371 3.79574V6.07117H13.1257C11.9003 6.07117 11.5169 6.78356 11.5169 7.51576V9.24926H14.2542L13.8171 11.9226H11.5173V18.3836C16.2367 17.6898 19.8456 13.8649 19.8456 9.24926Z"
                                              fill="white"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.2745 2.57317C18.5833 2.87333 17.8518 3.07108 17.1034 3.16017C17.8899 2.69993 18.4815 1.96874 18.767 1.10376C18.0233 1.53829 17.2111 1.84317 16.3651 2.00536C16.0088 1.63226 15.5804 1.33545 15.1058 1.13297C14.6311 0.93049 14.1203 0.826568 13.6042 0.827521C11.5148 0.827521 9.824 2.4926 9.824 4.54518C9.82252 4.83069 9.85526 5.11535 9.92152 5.39307C8.42329 5.32289 6.95622 4.94096 5.61416 4.27173C4.2721 3.6025 3.08461 2.66071 2.12766 1.5066C1.79194 2.07216 1.61439 2.71745 1.61357 3.37502C1.61357 4.66412 2.28661 5.80359 3.30288 6.47116C2.70077 6.45688 2.11099 6.29763 1.58362 6.00693V6.05297C1.58362 7.85617 2.889 9.35628 4.6167 9.69774C4.29181 9.78428 3.95702 9.82813 3.62078 9.82818C3.38219 9.8286 3.14415 9.80546 2.91012 9.75912C3.39042 11.2362 4.78832 12.3105 6.44423 12.3412C5.09869 13.3774 3.44671 13.9375 1.74795 13.9333C1.44641 13.9329 1.14516 13.915 0.845703 13.8796C2.57386 14.9823 4.58271 15.5656 6.63313 15.5601C13.5962 15.5601 17.4002 9.8934 17.4002 4.97872C17.4002 4.81758 17.396 4.65645 17.3883 4.49915C18.1266 3.97432 18.7654 3.32212 19.2745 2.57317Z"
                                            fill="white"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostBody;