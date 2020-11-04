import { shallowMount } from "@vue/test-utils";
import BoxMessage from "@/components/common/BoxMessage.vue";

describe("BoxMessage.vue", () => {
  it("renders props when passed", () => {
    const title = "title";
    const subtitle = "subtitle";
    const description = "description";
    const wrapper = shallowMount(BoxMessage, {
      propsData: { title, subtitle, description },
    });
    expect(wrapper.text()).toMatch(title);
    expect(wrapper.text()).toMatch(subtitle);
    expect(wrapper.text()).toMatch(description);
  });
});
