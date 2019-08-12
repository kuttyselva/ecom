import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirSection } from '../../redux/directory/directory.selector';
const  Directory=({sections})=>
       (
            <div className="directory-menu">
                {
                    sections.map(({id,...sectionProp})=>
                        <MenuItem  key={id} {...sectionProp}/>
                    )
                }
            </div>
        )
const mapStateToProps=createStructuredSelector({
sections:selectDirSection
});
export default connect(mapStateToProps)(Directory);
