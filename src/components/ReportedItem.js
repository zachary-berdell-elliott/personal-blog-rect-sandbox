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
        <article className="d-flex-column">
            <p>{reportedItem.reason}</p>
            {reportedItem.status != null ? (
                <p>{reportedItem.status}</p>
            ) : <p>A moderator will review this post shortly.</p>}
            <div className="report-information d-flex-row">
                <div>
                    <b>User Reported:</b>
                    <p>  ID: {reportedItem.userReported._id}</p>
                    <p>  username: {reportedItem.userReported.username}</p>
                </div>
                <div>
                    <b>Reported By:</b>
                    <p>  ID: {reportedItem.reportedBy._id}</p>
                    <p>  username: {reportedItem.reportedBy.username}</p>
                </div>
            </div>
            <div className="action-buttons d-flex-row">
                <button className="voting-button">PermaBan User</button>
                <button className="voting-button">Open Ban Form</button>
                <button className="voting-button">Edit Report Status</button>
                <button className="voting-button">Delete Report</button>
                <button className="voting-button">Bulk Delete Form</button>
            </div>
        </article>
    )
}

export default ReportedItem;