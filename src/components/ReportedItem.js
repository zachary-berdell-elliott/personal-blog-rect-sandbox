import React from 'react';

function ReportedItem() {
    const reportedItem = {
        reason: "This is a highly inappropriate post that must be banned immediately.",
        status: "This post has been reviewed and we found some concerns.",
        isActive: true,
        userReported: {
            _id: "7628967982726",
            username: "MeBadUser"
        },
        commentReported: {

        },
        reportedBy: {
            _id: "98641578901",
            username: "MeIsSnitchOrGoodSamaritan"
        }
    }
    return(
        <article className="d-flex-row">
            <p>{reportedItem.reason}</p>
            {reportedItem.status != null ? (
                <p>{reportedItem.status}</p>
            ) : <p>A moderator will review this post shortly.</p>}
        </article>
    )
}

export default ReportedItem;