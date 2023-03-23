import { OptionWithRole, RolesEnum } from '../context/CalculatorContext';

export function getPlatform(title: 'Apple iOS' | 'Android' | 'Web' | 'Multi-Platform') {
  switch (title) {
    case 'Apple iOS':
      return {
        title: 'Apple iOS',
        roles: [RolesEnum.MD],
        optimisticHours: 40,
        pessimisticHours: 57,
      } as OptionWithRole;
    case 'Android':
      return {
        title: 'Android',
        roles: [RolesEnum.MD],
        optimisticHours: 40,
        pessimisticHours: 57,
      } as OptionWithRole;
    case 'Web':
      return {
        title: 'Web',
        roles: [RolesEnum.FE],
        optimisticHours: 40,
        pessimisticHours: 57,
      } as OptionWithRole;
    case 'Multi-Platform':
      return {
        title: 'Multi-Platform',
        roles: [RolesEnum.BE, RolesEnum.FE],
        optimisticHours: 80,
        pessimisticHours: 114,
      } as OptionWithRole;
  }
}

export function getPlatformSize(title: 'Small' | 'Medium' | 'Large') {
  switch (title) {
    case 'Small':
      return {
        title: 'Small',
        roles: [],
        optimisticHours: 20,
        pessimisticHours: 29,
      } as OptionWithRole;
    case 'Medium':
      return {
        title: 'Medium',
        roles: [RolesEnum.PM],
        optimisticHours: 40,
        pessimisticHours: 57,
      } as OptionWithRole;
    case 'Large':
      return {
        title: 'Large',
        roles: [RolesEnum.PM],
        optimisticHours: 60,
        pessimisticHours: 86,
      } as OptionWithRole;
  }
}

export function getDesigner(title: 'Yes' | 'No') {
  switch (title) {
    case 'Yes':
      return { title: 'Yes', roles: [], optimisticHours: 0, pessimisticHours: 0 } as OptionWithRole;
    case 'No':
      return {
        title: 'No',
        roles: [RolesEnum.D],
        optimisticHours: 0,
        pessimisticHours: 0,
      } as OptionWithRole;
  }
}

export function getUxLevel(title: 'MVP' | 'Stock' | 'Beautiful', hasDesigner: boolean) {
  switch (title) {
    case 'MVP':
      return {
        title: 'MVP',
        roles: [],
        optimisticHours: hasDesigner ? 20 : 40,
        pessimisticHours: hasDesigner ? 29 : 57,
      } as OptionWithRole;
    case 'Stock':
      return {
        title: 'Stock',
        roles: [],
        optimisticHours: hasDesigner ? 30 : 60,
        pessimisticHours: hasDesigner ? 43 : 86,
      } as OptionWithRole;
    case 'Beautiful':
      return {
        title: 'Beautiful',
        roles: [],
        optimisticHours: hasDesigner ? 40 : 80,
        pessimisticHours: hasDesigner ? 57 : 114,
      } as OptionWithRole;
  }
}

export function getPersonalProfiles(title: 'Yes' | 'No' | 'Not sure') {
  switch (title) {
    case 'Yes':
      return {
        title: 'Yes',
        roles: [RolesEnum.BE],
        optimisticHours: 30,
        pessimisticHours: 43,
      } as OptionWithRole;
    case 'No':
      return { title: 'No', roles: [], optimisticHours: 0, pessimisticHours: 0 } as OptionWithRole;
    case 'Not sure':
      return {
        title: 'Not sure',
        roles: [RolesEnum.BE],
        optimisticHours: 5,
        pessimisticHours: 7,
      } as OptionWithRole;
  }
}

export function getConnected(title: 'Yes' | 'No' | 'Not sure') {
  switch (title) {
    case 'Yes':
      return {
        title: 'Yes',
        roles: [RolesEnum.BE],
        optimisticHours: 15,
        pessimisticHours: 21,
      } as OptionWithRole;
    case 'No':
      return { title: 'No', roles: [], optimisticHours: 0, pessimisticHours: 0 };
    case 'Not sure':
      return {
        title: 'Not sure',
        roles: [RolesEnum.BE],
        optimisticHours: 5,
        pessimisticHours: 7,
      } as OptionWithRole;
  }
}

interface MultiOptionsParams {
  selection: string[];
}
export function getLoginOptions({ selection }: MultiOptionsParams) {
  const options: OptionWithRole[] = [];
  selection.forEach((sel) => {
    switch (sel) {
      case 'Email':
        options.push({
          title: 'Email',
          roles: [RolesEnum.BE],
          optimisticHours: 15,
          pessimisticHours: 21,
        });
      case 'Social':
        options.push({
          title: 'Social',
          roles: [RolesEnum.BE],
          optimisticHours: 15,
          pessimisticHours: 21,
        });
      case 'No':
        options.push({ title: 'No', roles: [], optimisticHours: 0, pessimisticHours: 0 });
      case 'Not sure':
        options.push({
          title: 'Not sure',
          roles: [RolesEnum.BE],
          optimisticHours: 5,
          pessimisticHours: 7,
        });
    }
  });
  return options;
}

export function getPayments({ selection }: MultiOptionsParams) {
  const options: OptionWithRole[] = [];
  selection.forEach((sel) => {
    switch (sel) {
      case 'Subscription Plans':
        options.push({
          title: 'Subscription Plans',
          roles: [RolesEnum.BE],
          optimisticHours: 40,
          pessimisticHours: 57,
        });
      case 'Payment Processing':
        options.push({
          title: 'Payment Processing',
          roles: [RolesEnum.BE],
          optimisticHours: 80,
          pessimisticHours: 114,
        });
      case 'Shopping Cart':
        options.push({
          title: 'Shopping Cart',
          roles: [RolesEnum.BE],
          optimisticHours: 100,
          pessimisticHours: 143,
        });
      case 'MarketPlace':
        options.push({
          title: 'MarketPlace',
          roles: [RolesEnum.BE],
          optimisticHours: 100,
          pessimisticHours: 143,
        });
      case 'No':
        options.push({
          title: 'No',
          roles: [],
          optimisticHours: 0,
          pessimisticHours: 0,
        });
    }
  });
  return options;
}

export function getAdmin({ selection }: MultiOptionsParams) {
  const options: OptionWithRole[] = [];
  selection.forEach((sel) => {
    switch (sel) {
      case 'CMS Integration':
        options.push({
          title: 'CMS Integration',
          roles: [RolesEnum.BE],
          optimisticHours: 30,
          pessimisticHours: 43,
        });
      case 'Performance Monitoring':
        options.push({
          title: 'Performance Monitoring',
          roles: [],
          optimisticHours: 40,
          pessimisticHours: 57,
        });
      case 'Moderation/ Content Approval':
        options.push({
          title: 'Moderation/ Content Approval',
          roles: [RolesEnum.BE],
          optimisticHours: 40,
          pessimisticHours: 57,
        });
      case 'Usage Analytics':
        options.push({
          title: 'Usage Analytics',
          roles: [],
          optimisticHours: 25,
          pessimisticHours: 36,
        });
      case 'No':
        options.push({
          title: 'No',
          roles: [],
          optimisticHours: 0,
          pessimisticHours: 0,
        });
    }
  });

  return options;
}

export function getDates({ selection }: MultiOptionsParams) {
  const options: OptionWithRole[] = [];
  selection.forEach((sel) => {
    switch (sel) {
      case 'Calendar':
        options.push({
          title: 'Calendar',
          roles: [RolesEnum.BE],
          optimisticHours: 50,
          pessimisticHours: 71,
        });
      case 'Bookings':
        options.push({
          title: 'Bookings',
          roles: [RolesEnum.BE],
          optimisticHours: 40,
          pessimisticHours: 57,
        });
      case 'Live GPS Tracking':
        options.push({
          title: 'Live GPS Tracking',
          roles: [RolesEnum.BE],
          optimisticHours: 80,
          pessimisticHours: 114,
        });
      case 'Maps Integration':
        options.push({
          title: 'Maps Integration',
          roles: [RolesEnum.BE],
          optimisticHours: 80,
          pessimisticHours: 114,
        });
      case 'No':
        options.push({
          title: 'No',
          roles: [],
          optimisticHours: 0,
          pessimisticHours: 0,
        });
    }
  });
  return options;
}

export function getAllRoles(roles: string[] | undefined) {
  if (!roles) return null;
  // remove all duplicates
  const cleanedRoles = roles.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });
  return cleanedRoles;
}

function extractHours(options: OptionWithRole[]) {
  let optimisticHours = 0;
  let pessimisticHours = 0;
  options.forEach((opt) => {
    if (opt.optimisticHours) {
      optimisticHours = optimisticHours + opt.optimisticHours;
    }
    if (opt.pessimisticHours) {
      pessimisticHours = pessimisticHours + opt.pessimisticHours;
    }
  });

  return {
    optimisticHours,
    pessimisticHours,
  };
}

interface CalculateOptimisticHoursParams {
  platform: OptionWithRole;
  platformSize: OptionWithRole;
  uxLevel: OptionWithRole;
  hasDesigner: OptionWithRole;
  personalProfiles: OptionWithRole;

  loginOptions: OptionWithRole[];
  payments: OptionWithRole[];
  admin: OptionWithRole[];
  datesAndLocation: OptionWithRole[];
}

export function calculateOptimisticHours({
  platform,
  platformSize,
  uxLevel,
  hasDesigner,
  loginOptions,
  personalProfiles,
  payments,
  admin,
  datesAndLocation,
}: CalculateOptimisticHoursParams) {
  const loginOptionsTotals = extractHours(loginOptions);
  const paymentsOptionsTotals = extractHours(payments);
  const adminOptionsTotals = extractHours(admin);
  const datesAndLocationTotals = extractHours(datesAndLocation);

  const totalOptimistic =
    (platform.optimisticHours ?? 0) +
    (platformSize.optimisticHours ?? 0) +
    (uxLevel.optimisticHours ?? 0) +
    (hasDesigner.optimisticHours ?? 0) +
    (personalProfiles.optimisticHours ?? 0) +
    (loginOptionsTotals.optimisticHours ?? 0) +
    (paymentsOptionsTotals.optimisticHours ?? 0) +
    (adminOptionsTotals.optimisticHours ?? 0) +
    (datesAndLocationTotals.optimisticHours ?? 0);

  const totalPessimistic =
    (platform.pessimisticHours ?? 0) +
    (platformSize.pessimisticHours ?? 0) +
    (uxLevel.pessimisticHours ?? 0) +
    (hasDesigner.pessimisticHours ?? 0) +
    (personalProfiles.pessimisticHours ?? 0) +
    (loginOptionsTotals.pessimisticHours ?? 0) +
    (paymentsOptionsTotals.pessimisticHours ?? 0) +
    (adminOptionsTotals.pessimisticHours ?? 0) +
    (datesAndLocationTotals.pessimisticHours ?? 0);

  return {
    totalOptimistic: totalOptimistic,
    totalPessimistic: totalPessimistic,
  };
}
