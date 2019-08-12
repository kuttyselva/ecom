import React from 'react'
import { createStructuredSelector } from 'reselect';
import {  selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import './collections-overview.styles.scss'
import CollectionPreview from '../preview-collection/preview-collection.component';
const CollectionOverview= ({collections}) => {
  return (
    <div className="collections-overview">
       {collections.map(({ id, ...otherProp }) => (
      <CollectionPreview key={id} {...otherProp} />
    ))}
    </div>
  )
};
const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionOverview);
