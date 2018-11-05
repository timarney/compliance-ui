export const multiControlData = {
  ITSG33a: {
    AU_2: {
      name: "Auditable Events",
      family: "AU",
      description: "",
      verifications: [
        {
          origin: "cdssnc/pod-check-compliance:latest",
          timestamp: "2018-10-31T13:58:01Z",
          passed: "true",
          description: "",
          component: "Infrastructure",
          references: "kube-apiserver"
        },
        {
          origin: "cdssnc/pod-check-compliance:latest",
          timestamp: "2018-10-31T14:02:06Z",
          passed: "true",
          description: "",
          component: "Infrastructure",
          references: "kube-apiserver"
        }
      ]
    },
    AU_3: {
      name: "Auditable Events",
      family: "AU",
      description: "",
      verifications: [
        {
          origin: "cdssnc/pod-check-compliance:latest",
          timestamp: "2018-10-31T13:58:01Z",
          passed: "true",
          description: "",
          component: "Infrastructure",
          references: "kube-apiserver"
        },
        {
          origin: "cdssnc/pod-check-compliance:latest",
          timestamp: "2018-10-31T14:02:06Z",
          passed: "false",
          description: "",
          component: "Infrastructure",
          references: "kube-apiserver"
        }
      ]
    }
  }
};
