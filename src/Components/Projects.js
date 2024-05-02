import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div style={{ paddingTop: '80px' }} className='container'>
                <div className='p-cont'>
                    <div className='header'>Projects Implemented</div>
                    <div className='header1'>Projects I've developed throughout my career.</div>

                    {/* Column 1 */}
                    <div className='p-column-cont'>
                        {/* Taomish Project */}
                        <div className='p-column'>
                            <div className='card-cont'>
                                <div className='front-card'>
                                    <img src='assets/images/projects/taomish.png' alt='img' className='p-img' />
                                </div>

                                <div className='back-card'>
                                    <img src='assets/images/projects/mow.png' alt='img' className='p-img-back' />
                                </div>
                            </div>
                        </div>

                        {/* Jumpstart Project */}
                        <div className='p-column'>
                            <div className='card-cont'>
                                <div className='front-card'>
                                    <img src='assets/images/projects/jumpstart.png' alt='img' className='p-img' />
                                </div>

                                <div className='back-card'>
                                    <img src='assets/images/projects/mow.png' alt='img' className='p-img-back' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className='p-column-cont'>
                        {/* Meals on Wheels Priject */}
                        <div className='p-column'>
                            <div className='card-cont'>
                                <div className='front-card'>
                                    <img src='assets/images/projects/mow.png' alt='img' className='p-img' />
                                </div>

                                <div className='back-card'>
                                    <img src='assets/images/projects/mow.png' alt='img' className='p-img-back' />
                                </div>
                            </div>
                        </div>

                        {/* Know Your Neighborhood Project */}
                        <div className='p-column'>
                            <div className='card-cont'>
                                <div className='front-card'>
                                    <img src='assets/images/projects/kyn.png' alt='img' className='p-img' />
                                </div>

                                <div className='back-card'>
                                    <img src='assets/images/projects/mow.png' alt='img' className='p-img-back' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;