import * as React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  TimelineViews,
  Inject,
  ResourcesDirective,
  ResourceDirective,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import {
  extend,
  Internationalization,
  isNullOrUndefined,
} from "@syncfusion/ej2-base";
import { SampleBase } from "./sample-base.js";
export class TimelineResource extends SampleBase {
  constructor() {
    super(...arguments);
    this.instance = new Internationalization();
    this.data = [];
  }
  resourceHeaderTemplate(props) {
    return (
      <div className="template-wrap">
        <div className="">{}</div>
        <div className="">{}</div>
        <div className="">{}</div>
      </div>
    );
  }
  onActionBegin(args) {
    if (
      args.requestType === "eventCreate" ||
      args.requestType === "eventChange"
    ) {
      let data;
      if (args.requestType === "eventCreate") {
        data = args.data[0];
      } else if (args.requestType === "eventChange") {
        data = args.data;
      }
      if (!this.scheduleObj.isSlotAvailable(data)) {
        args.cancel = true;
      }
    }
  }
  onEventRendered(args) {
    let data = args.data;
    if (this.isReadOnly(data.EndTime)) {
      args.element.setAttribute("aria-readonly", "true");
      args.element.classList.add("e-read-only");
    }
  }
  onRenderCell(args) {
    if (args.element.classList.contains("e-work-cells")) {
      if (args.date < new Date(2018, 6, 31, 0, 0)) {
        args.element.setAttribute("aria-readonly", "true");
        args.element.classList.add("e-read-only-cells");
      }
    }
    if (
      args.elementType === "emptyCells" &&
      args.element.classList.contains("e-resource-left-td")
    ) {
      let target = args.element.querySelector(".e-resource-text");
    }
  }
  onPopupOpen(args) {
    let data = args.data;
    if (
      args.type === "QuickInfo" ||
      args.type === "Editor" ||
      args.type === "RecurrenceAlert" ||
      args.type === "DeleteAlert"
    ) {
      let target =
        args.type === "RecurrenceAlert" || args.type === "DeleteAlert"
          ? data.element[0]
          : args.target;
      if (
        !isNullOrUndefined(target) &&
        target.classList.contains("e-work-cells")
      ) {
        if (
          target.classList.contains("e-read-only-cells") ||
          !this.scheduleObj.isSlotAvailable(data)
        ) {
          args.cancel = true;
        }
      } else if (
        !isNullOrUndefined(target) &&
        target.classList.contains("e-appointment") &&
        this.isReadOnly(data.EndTime)
      ) {
        args.cancel = true;
      }
    }
  }
  render() {
    return (
      <div className="schedule-control-section">
        <div className="col-lg-12 control-section">
          <div className="control-wrapper">
            <ScheduleComponent
              cssClass="timeline-resource"
              ref={(schedule) => (this.scheduleObj = schedule)}
              width="100%"
              height="650px"
              selectedDate={new Date(2018, 7, 1)}
              workHours={{ start: "08:00", end: "18:00" }}
              timeScale={{ interval: 60, slotCount: 1 }}
              resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
              eventSettings={{
                dataSource: this.data,
                fields: {
                  id: "Id",
                  subject: { title: "Summary", name: "Subject" },
                  location: { title: "Location", name: "Location" },
                  description: { title: "Comments", name: "Description" },
                  startTime: { title: "From", name: "StartTime" },
                  endTime: { title: "To", name: "EndTime" },
                },
              }}
              eventRendered={this.onEventRendered.bind(this)}
              popupOpen={this.onPopupOpen.bind(this)}
              actionBegin={this.onActionBegin.bind(this)}
              renderCell={this.onRenderCell.bind(this)}
              group={{ enableCompactView: false, resources: [""] }}
            >
              <ResourcesDirective>
                <ResourceDirective
                  field="ExamId"
                  title="exam"
                  name="exam"
                  allowMultiple={true}
                  dataSource={this.ownerData}
                  textField="text"
                  idField="id"
                  colorField="color"
                ></ResourceDirective>
              </ResourcesDirective>
              <ViewsDirective>
                <ViewDirective option="TimelineDay" />
                <ViewDirective option="TimelineWeek" />
              </ViewsDirective>
              <Inject services={[TimelineViews, Resize, DragAndDrop]} />
            </ScheduleComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineResource;
