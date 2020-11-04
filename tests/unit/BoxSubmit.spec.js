import { shallowMount } from "@vue/test-utils";
import BoxSubmit from "@/components/common/BoxSubmit.vue";

describe("BoxSubmit.vue", () => {
  it("renders props when passed", () => {
    const title = "title";
    const wrapper = shallowMount(BoxSubmit, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
