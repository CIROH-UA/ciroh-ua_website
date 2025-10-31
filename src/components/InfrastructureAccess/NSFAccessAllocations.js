import React from 'react';
import InfrastructureAccessSection from './InfrastructureAccessSection';

const NSFAccessAllocations = () => {
  const steps = [
    {
      title: "Submit Infrastructure Request",
      description: "The PI for your project must submit the Infrastructure Request Form below to request team-wide access to a particular resource on ACCESS Allocation.",
      buttons: [
        {
          text: "Infrastructure Request Form",
          link: "https://github.com/CIROH-UA/NGIAB-CloudInfra/issues/new?assignees=&labels=on-prem&projects=&template=onprem-request.md&title="
        }
      ],
      details: "This form ensures your project is properly registered and your team has the necessary permissions."
    },
    {
      title: "Register for ACCESS Allocation",
      description: "If you don't already have an ACCESS Allocation account, register for one using the link below.",
      optional: true,
      buttons: [
        {
          text: "ACCESS Allocation New User Registration",
          link: "https://operations.access-ci.org/identity/new-user"
        }
      ],
      details: "ACCESS Allocation is required for authentication and authorization across NSF-funded resources."
    },
    {
      title: "Submit NSF ACCESS Resources Request",
      description: "After your project has been approved, using your ACCESS Allocation ID, submit the NSF ACCESS Resources Request form for individual user accounts.",
      buttons: [
        {
          text: "NSF ACCESS Resources Request Form",
          link: "https://forms.office.com/r/ERyKyHbdaC"
        }
      ],
      details: "This creates your personal account on the computing platform."
    }
  ];

  const description = (
    <>
      In collaboration with <a href="https://allocations.access-ci.org" target="_blank" rel="noopener noreferrer">NSF ACCESS Allocations</a>, CIROH offers access to all the resources that are available through an allocation on the <a href="https://allocations.access-ci.org/resources" target="_blank" rel="noopener noreferrer">Resources</a>. This guide will walk you through the steps necessary to gain access to any resources using your NSF ACCESS allocation.
    </>
  );

  return (
    <InfrastructureAccessSection
      badge="High-Performance Computing"
      title="NSF ACCESS Allocations through CIROH"
      description={description}
      steps={steps}
      helpBox={{
        title: "Need Help?",
        content: (
          <>
            If you are unable to access the forms, please contact the CIROH team at <a href="mailto:ciroh-it-support@ua.edu">ciroh-it-support@ua.edu</a> for assistance.
          </>
        )
      }}
      successBox={{
        title: "You're All Set!",
        description: "Once you're granted access, you're ready to begin using the resources!",
        link: "https://allocations.access-ci.org/resources",
        linkText: "Visit Your ACCESS Resources Page"
      }}
    />
  );
};

export default NSFAccessAllocations;