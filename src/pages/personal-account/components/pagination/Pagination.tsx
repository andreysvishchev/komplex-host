import React from 'react';

const Pagination = () => {
    return (
        <div>
            <div className="pagination">
                <div className="pagination__row">
                    <div className="pagination__block">
                        <button className="pagination__hide">Свернуть</button>
                        <div className="pagination__amount">
                            <span>1</span>-<span>10</span>,всего <span>50</span>
                        </div>
                    </div>
                    <div className="pagination__block">
                        <div className="pagination__pages">
                            <span>1</span> из <span>5</span>
                        </div>
                        <div className="pagination__buttons">
                            <button className="pagination__btn pagination__btn--prev">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M0.74992 6.00016C0.743725 5.86542 0.787977 5.72844 0.882675 5.62553L5.38894 0.728386C5.56671 0.535199 5.85492 0.535199 6.03269 0.728386C6.21046 0.921573 6.21046 1.23479 6.03269 1.42798L1.82545 6.00016L6.03269 10.5723C6.21046 10.7655 6.21046 11.0788 6.03269 11.2719C5.85492 11.4651 5.56671 11.4651 5.38894 11.2719L0.882675 6.3748C0.787977 6.27188 0.743725 6.13491 0.74992 6.00016Z"
                                          fill="#DEDEDE"/>
                                </svg>
                            </button>
                            <button className="pagination__btn pagination__btn--next">
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M6.25008 5.99983C6.25628 6.13458 6.21203 6.27156 6.11733 6.37447L1.61106 11.2716C1.43329 11.4648 1.14508 11.4648 0.96731 11.2716C0.789543 11.0784 0.789543 10.7652 0.96731 10.572L5.17455 5.99984L0.96731 1.42765C0.789543 1.23447 0.789543 0.921249 0.96731 0.728061C1.14508 0.534875 1.43329 0.534875 1.61106 0.728062L6.11733 5.6252C6.21202 5.72812 6.25627 5.86509 6.25008 5.99983Z"
                                          fill="#DEDEDE"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;