export const singleControlData = {
  ITSG33a: {
    AU_2: {
      name: "Auditable Events",
      family: "AU",
      description:
        "(A) The organization determines that the information system is capable of auditing the following events: [Assignment: organization-defined auditable events].\n(B) The organization coordinates the security audit function with other organizational entities requiring audit-related information to enhance mutual support and to help guide the selection of auditable events.\n(C) The organization provides a rationale for why the auditable events are deemed to be adequate to support after-the-fact investigations of security incidents.\n(D) The organization determines that the following events are to be audited within the information system: [Assignment: organization-defined audited events (the subset of the auditable events defined in AU-2 a.) along with the frequency of (or situation requiring) auditing for each identified event].",
      verifications: [
        {
          origin: "cdssnc/pod-check-compliance:latest",
          timestamp: "2018-10-31T13:58:01Z",
          passed: "true",
          description:
            "The Kubernetes API Server Pod logs all API requests that make infrastructure changes.",
          component: "Infrastructure",
          references: "kube-apiserver"
        },
        {
          origin: "cdssnc/pod-check-compliance:latest",
          timestamp: "2018-10-31T14:02:06Z",
          passed: "true",
          description:
            "The Kubernetes API Server Pod logs all API requests that make infrastructure changes.",
          component: "Infrastructure",
          references: "kube-apiserver"
        }
      ]
    }
  }
};
