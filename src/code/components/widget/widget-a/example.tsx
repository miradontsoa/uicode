import {
  Cog6ToothIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeOpenIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";
import ButtonGroupB from "../../button-group/button-group-b/button-group-b";
import ButtonA from "../../button/button-a/button-a";
import CardFrameA from "../../frame/card-frame-a/card-frame-a";
import GlassA from "../../frame/glass-frame-a/glass-frame-a";
import WidgetA from "./widget-a";

export default function Example() {
  return (
    <div>
      <div className="md:grid-cols-1 grid gap-4 max-w-md mx-auto">
        <div>
          <CardFrameA overflow="hidden">
            <WidgetA
              headerIconElement={<EnvelopeOpenIcon className="w-5" />}
              headerStartElement={<span>Inbox</span>}
              headerCenterElement={<span>Hello!</span>}
              headerEndElement={
                <ButtonGroupB
                  variant="blue"
                  gap="none"
                  size="small"
                  buttons={[
                    {
                      icon: <LinkIcon />,
                      content: "Link",
                      iconOnly: true,
                    },
                    {
                      icon: <EllipsisHorizontalCircleIcon />,
                      content: "More",
                      iconOnly: true,
                    },
                  ]}
                />
              }
              footerEndElement={<ButtonA>Validate</ButtonA>}
            >
              <h6>Content</h6>
              <p>Widget inside a CardFrameA content</p>
            </WidgetA>
          </CardFrameA>
        </div>
        <div>
          <WidgetA
            headerIconElement={<span>ICON</span>}
            headerStartElement={<span>Header Start</span>}
            headerCenterElement={<span>Center </span>}
            headerEndElement={<span>Header End</span>}
            footerStartElement={<span>Footer Start</span>}
            footerCenterElement={<span>Footer Center</span>}
            footerEndElement={<span>Footer End</span>}
          >
            <h6>Content</h6>
            <p>Widget content</p>
          </WidgetA>
        </div>
      </div>
      <div
        className="mt-4 p-4"
        style={{
          backgroundImage: "url('/placeholder/img-landscape-7.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="md:grid-cols-1 grid gap-4 max-w-md mx-auto">
          <GlassA overflow="hidden">
            <WidgetA
              headerIconElement={<EnvelopeOpenIcon className="w-5" />}
              headerStartElement={<span>Inbox</span>}
              headerCenterElement={<span>Hello!</span>}
              headerEndElement={
                <ButtonGroupB
                  variant="blue"
                  gap="none"
                  size="small"
                  buttons={[
                    {
                      icon: <LinkIcon />,
                      content: "Link",
                      iconOnly: true,
                    },
                    {
                      icon: <EllipsisHorizontalCircleIcon />,
                      content: "More",
                      iconOnly: true,
                    },
                  ]}
                />
              }
              footerEndElement={<ButtonA>Validate</ButtonA>}
            >
              <h6>Content</h6>
              <p>Widget inside a WidgetFrameA content</p>
            </WidgetA>
          </GlassA>

          <GlassA overflow="hidden" variant="dark">
            <WidgetA
              variant="dark"
              padding="large"
              headerIconElement={<Cog6ToothIcon className="w-5" />}
              headerStartElement={<span>Settings</span>}
              headerEndElement={
                <ButtonGroupB
                  variant="dark"
                  gap="none"
                  size="small"
                  buttons={[
                    {
                      icon: <LinkIcon />,
                      content: "Link",
                      iconOnly: true,
                    },
                    {
                      icon: <EllipsisHorizontalCircleIcon />,
                      content: "More",
                      iconOnly: true,
                    },
                  ]}
                />
              }
              footerEndElement={
                <ButtonA variant="light" shadow="none">
                  Validate
                </ButtonA>
              }
            >
              <h6>Content</h6>
              <p>
                Widget inside a WidgetFrameA content, with
                variant=&quot;dark&quot; and padding=&quot;large&quot;
              </p>
            </WidgetA>
          </GlassA>
        </div>
      </div>
    </div>
  );
}
