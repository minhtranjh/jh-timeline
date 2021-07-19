import React from "react";
import TimelineItem from "../TimelineItem/TimelineItem";
import "./TimelineTree.css";
function TimelineTree ({filtedListMembers}) {
    return (
      <div className="timeline-stream">
        {filtedListMembers.map((item, index) => {
          if ((index + 1) % 2 === 0) {
            return (
              <TimelineItem
                isRight={true}
                members={item}
                key={item.members[0].id}
              />
            );
          }
          return (
            <TimelineItem
              isRight={false}
              members={item}
              key={item.members[0].id}
            />
          );
        })}
      </div>
    );
}

export default TimelineTree;
